import { ChessPiece, Position, PieceColor } from '../types/chess';
import { isValidMove } from './chessLogic';
import { PIECE_VALUES } from './constants';

interface Move {
  from: Position;
  to: Position;
  score: number;
}

const evaluatePosition = (piece: ChessPiece): number => {
  const { type, color, position } = piece;
  let bonus = 0;

  // Position bonuses for pawns
  if (type === 'pawn') {
    const row = color === 'white' ? position.y : 7 - position.y;
    bonus = row; // Encourage forward movement
  }

  // Position bonuses for knights and bishops
  if (type === 'knight' || type === 'bishop') {
    const centerDistance = Math.abs(3.5 - position.x) + Math.abs(3.5 - position.y);
    bonus = (8 - centerDistance) / 2; // Encourage central positions
  }

  return bonus;
};

const evaluateBoard = (board: (ChessPiece | null)[][], aiColor: PieceColor): number => {
  let score = 0;
  
  board.forEach((row, y) => {
    row.forEach((piece, x) => {
      if (piece) {
        const value = PIECE_VALUES[piece.type];
        const positionValue = evaluatePosition(piece);
        const totalValue = value + positionValue;
        
        if (piece.color === aiColor) {
          score += totalValue;
        } else {
          score -= totalValue;
        }
      }
    });
  });
  
  return score;
};

const getAllValidMoves = (
  board: (ChessPiece | null)[][],
  color: PieceColor
): { from: Position; to: Position }[] => {
  const moves: { from: Position; to: Position }[] = [];

  board.forEach((row, y) => {
    row.forEach((piece, x) => {
      if (piece && piece.color === color) {
        for (let targetY = 0; targetY < 8; targetY++) {
          for (let targetX = 0; targetX < 8; targetX++) {
            const targetPos = { x: targetX, y: targetY };
            if (isValidMove(piece, targetPos, board)) {
              moves.push({
                from: { x, y },
                to: targetPos
              });
            }
          }
        }
      }
    });
  });

  return moves;
};

const makeMove = (
  board: (ChessPiece | null)[][],
  from: Position,
  to: Position
): (ChessPiece | null)[][] => {
  const newBoard = board.map(row => [...row]);
  const piece = newBoard[from.y][from.x];
  
  if (piece) {
    newBoard[to.y][to.x] = {
      ...piece,
      position: to
    };
    newBoard[from.y][from.x] = null;
  }
  
  return newBoard;
};

export const findBestMove = (
  board: (ChessPiece | null)[][],
  aiColor: PieceColor
): { from: Position; to: Position } | null => {
  const validMoves = getAllValidMoves(board, aiColor);
  let bestMove: { from: Position; to: Position } | null = null;
  let bestScore = aiColor === 'white' ? -Infinity : Infinity;

  validMoves.forEach(move => {
    const newBoard = makeMove(board, move.from, move.to);
    const score = evaluateBoard(newBoard, aiColor);

    if (aiColor === 'white' ? score > bestScore : score < bestScore) {
      bestScore = score;
      bestMove = move;
    }
  });

  return bestMove;
};