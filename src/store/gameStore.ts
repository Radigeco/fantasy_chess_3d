import { create } from 'zustand';
import { ChessPiece, Position, PieceColor, GameState, GameMode, Move } from '../types/chess';
import { isValidMove } from '../utils/chessLogic';
import { findBestMove } from '../utils/aiLogic';
import { createInitialBoard } from '../utils/boardSetup';
import { checkGameOver } from '../utils/gameLogic';
import { AI_MOVE_DELAY } from '../utils/constants';

export const useGameStore = create<GameState & {
  setSelectedPiece: (piece: ChessPiece | null) => void;
  movePiece: (from: Position, to: Position) => void;
  startGame: (playerColor: PieceColor, gameMode: GameMode) => void;
  resetGame: () => void;
}>((set, get) => ({
  board: createInitialBoard(),
  selectedPiece: null,
  currentTurn: 'white',
  playerColor: 'white',
  gameMode: 'human',
  gameStarted: false,
  moveHistory: [],
  gameOver: false,
  winner: null,
  
  setSelectedPiece: (piece) => {
    const { currentTurn, playerColor, gameMode } = get();
    if (gameMode === 'ai' && currentTurn !== playerColor) return;
    set({ selectedPiece: piece });
  },
  
  movePiece: (from, to) => {
    const { board, selectedPiece, currentTurn, gameMode, playerColor, moveHistory } = get();
    
    const movingPiece = selectedPiece || board[from.y][from.x];
    if (!movingPiece || movingPiece.color !== currentTurn) return;
    
    if (isValidMove(movingPiece, to, board)) {
      const newBoard = board.map(row => [...row]);
      const capturedPiece = newBoard[to.y][to.x];
      
      // Update piece position
      newBoard[to.y][to.x] = {
        ...movingPiece,
        position: to
      };
      newBoard[from.y][from.x] = null;
      
      const move: Move = {
        piece: movingPiece,
        from,
        to,
        capturedPiece
      };

      // Check for game over
      const { isOver, winner } = checkGameOver(newBoard);
      
      if (isOver && winner) {
        set({
          board: newBoard,
          selectedPiece: null,
          moveHistory: [...moveHistory, move],
          gameOver: true,
          winner
        });
        return;
      }
      
      const newTurn = currentTurn === 'white' ? 'black' : 'white';
      set({
        board: newBoard,
        selectedPiece: null,
        currentTurn: newTurn,
        moveHistory: [...moveHistory, move]
      });

      // AI move
      if (gameMode === 'ai' && newTurn !== playerColor) {
        setTimeout(() => {
          const aiMove = findBestMove(newBoard, newTurn);
          if (aiMove) {
            const { from: aiFrom, to: aiTo } = aiMove;
            const aiPiece = newBoard[aiFrom.y][aiFrom.x];
            if (aiPiece && isValidMove(aiPiece, aiTo, newBoard)) {
              get().movePiece(aiFrom, aiTo);
            }
          }
        }, AI_MOVE_DELAY);
      }
    }
  },

  startGame: (playerColor: PieceColor, gameMode: GameMode) => {
    const initialBoard = createInitialBoard();
    set({
      board: initialBoard,
      selectedPiece: null,
      currentTurn: 'white',
      playerColor,
      gameMode,
      gameStarted: true,
      moveHistory: [],
      gameOver: false,
      winner: null
    });

    if (gameMode === 'ai' && playerColor === 'black') {
      setTimeout(() => {
        const aiMove = findBestMove(initialBoard, 'white');
        if (aiMove) {
          const { from, to } = aiMove;
          const piece = initialBoard[from.y][from.x];
          if (piece && isValidMove(piece, to, initialBoard)) {
            get().movePiece(from, to);
          }
        }
      }, AI_MOVE_DELAY);
    }
  },

  resetGame: () => {
    set({
      board: createInitialBoard(),
      selectedPiece: null,
      currentTurn: 'white',
      gameStarted: false,
      moveHistory: [],
      gameOver: false,
      winner: null
    });
  }
}));