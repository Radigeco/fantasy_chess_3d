import React from 'react';
import { Position, ChessPiece } from '../types/chess';
import { useGameStore } from '../store/gameStore';
import { cn } from '../utils/cn';

interface SquareProps {
  position: Position;
  piece: ChessPiece | null;
  isLight: boolean;
  isHighlighted: boolean;
  onClick: () => void;
}

export const Square: React.FC<SquareProps> = ({
  position,
  piece,
  isLight,
  isHighlighted,
  onClick,
}) => {
  const { setSelectedPiece, currentTurn } = useGameStore();

  const handleClick = () => {
    console.log('Square clicked:', position, 'Piece:', piece); // Debug log
    if (piece && piece.color === currentTurn) {
      setSelectedPiece(piece);
    } else {
      onClick();
    }
  };

  return (
    <div
      className={cn(
        'w-full h-full relative transition-colors duration-200',
        isLight ? 'bg-amber-100' : 'bg-amber-800',
        isHighlighted && 'ring-2 ring-blue-400',
        'hover:brightness-110 cursor-pointer'
      )}
      onClick={handleClick}
    >
      {piece && (
        <div className="absolute inset-0 p-1">
          <div
            className={cn(
              'w-full h-full rounded-sm transition-transform duration-200 hover:scale-105',
              'flex items-center justify-center text-center',
              piece.color === 'white' ? 'text-white' : 'text-black',
              'font-bold text-2xl'
            )}
          >
            {piece.type.charAt(0).toUpperCase()}
          </div>
        </div>
      )}
    </div>
  );
};