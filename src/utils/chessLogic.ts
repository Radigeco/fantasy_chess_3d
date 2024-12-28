import { Position, ChessPiece } from '../types/chess';

export const isValidMove = (
  piece: ChessPiece,
  targetPosition: Position,
  board: (ChessPiece | null)[][]
): boolean => {
  const { type, position, color } = piece;
  const dx = Math.abs(targetPosition.x - position.x);
  const dy = Math.abs(targetPosition.y - position.y);
  
  // Check if target position contains a piece of the same color
  const targetPiece = board[targetPosition.y][targetPosition.x];
  if (targetPiece && targetPiece.color === color) {
    return false;
  }

  // Basic movement validation for each piece type
  switch (type) {
    case 'pawn':
      const direction = color === 'white' ? -1 : 1;
      const startRow = color === 'white' ? 6 : 1;
      
      // Regular move
      if (position.x === targetPosition.x && targetPosition.y === position.y + direction) {
        return !board[targetPosition.y][targetPosition.x];
      }
      
      // Initial double move
      if (position.y === startRow && position.x === targetPosition.x && 
          targetPosition.y === position.y + 2 * direction) {
        return !board[targetPosition.y][targetPosition.x] && 
               !board[position.y + direction][position.x];
      }
      
      // Capture
      if (dx === 1 && targetPosition.y === position.y + direction) {
        const targetPiece = board[targetPosition.y][targetPosition.x];
        return targetPiece !== null && targetPiece.color !== color;
      }
      return false;

    case 'rook':
      return (dx === 0 || dy === 0) && !hasObstacles(position, targetPosition, board);

    case 'knight':
      return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);

    case 'bishop':
      return dx === dy && !hasObstacles(position, targetPosition, board);

    case 'queen':
      return (dx === dy || dx === 0 || dy === 0) && !hasObstacles(position, targetPosition, board);

    case 'king':
      return dx <= 1 && dy <= 1;

    default:
      return false;
  }
};

const hasObstacles = (
  from: Position,
  to: Position,
  board: (ChessPiece | null)[][]
): boolean => {
  const dx = Math.sign(to.x - from.x);
  const dy = Math.sign(to.y - from.y);
  let x = from.x + dx;
  let y = from.y + dy;

  while (x !== to.x || y !== to.y) {
    if (board[y][x] !== null) return true;
    x += dx;
    y += dy;
  }

  return false;
};