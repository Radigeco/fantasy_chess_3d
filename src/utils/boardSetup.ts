import { ChessPiece, PieceType, PieceColor } from '../types/chess';

export const createInitialBoard = (): (ChessPiece | null)[][] => {
  const board: (ChessPiece | null)[][] = Array(8)
    .fill(null)
    .map(() => Array(8).fill(null));
  
  const pieces: PieceType[] = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
  
  ['white', 'black'].forEach((color: PieceColor) => {
    const backRow = color === 'white' ? 7 : 0;
    const pawnRow = color === 'white' ? 6 : 1;
    
    // Place main pieces
    pieces.forEach((type, x) => {
      board[backRow][x] = {
        type: type as PieceType,
        color: color as PieceColor,
        position: { x, y: backRow },
        imageUrl: ''
      };
    });
    
    // Place pawns
    for (let x = 0; x < 8; x++) {
      board[pawnRow][x] = {
        type: 'pawn',
        color: color as PieceColor,
        position: { x, y: pawnRow },
        imageUrl: ''
      };
    }
  });
  
  return board;
};