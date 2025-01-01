import { ChessPiece, Position } from '../types/chess';
import { isValidMove } from './chessLogic';

export const getPossibleMoves = (
  piece: ChessPiece,
  board: (ChessPiece | null)[][]
): Position[] => {
  const possibleMoves: Position[] = [];

  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      const targetPos = { x, y };
      if (isValidMove(piece, targetPos, board)) {
        possibleMoves.push(targetPos);
      }
    }
  }

  return possibleMoves;
};