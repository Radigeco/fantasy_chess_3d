import { ChessPiece, PieceColor } from '../types/chess';

export const checkGameOver = (board: (ChessPiece | null)[][]): {
  isOver: boolean;
  winner: PieceColor | null;
} => {
  let whiteKing = false;
  let blackKing = false;

  // Check for kings on the board
  board.forEach(row => {
    row.forEach(piece => {
      if (piece?.type === 'king') {
        if (piece.color === 'white') whiteKing = true;
        if (piece.color === 'black') blackKing = true;
      }
    });
  });

  // If either king is missing, the game is over
  if (!whiteKing) return { isOver: true, winner: 'black' };
  if (!blackKing) return { isOver: true, winner: 'white' };
  
  return { isOver: false, winner: null };
};