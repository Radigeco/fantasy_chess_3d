import React from 'react';
import { useGameStore } from '../store/gameStore';
import { Square } from './Square';
import { Position } from '../types/chess';

export const ChessBoard: React.FC = () => {
  const { board, selectedPiece, movePiece } = useGameStore();

  console.log('ChessBoard rendering, board state:', board); // Debug log

  const handleSquareClick = (position: Position) => {
    console.log('Square clicked:', position); // Debug log
    if (selectedPiece) {
      movePiece(selectedPiece.position, position);
    }
  };

  return (
    <div className="grid grid-cols-8 gap-0 w-[640px] h-[640px] bg-gray-800 p-4 rounded-lg shadow-2xl">
      {board.map((row, y) =>
        row.map((piece, x) => {
          const isLight = (x + y) % 2 === 0;
          const isHighlighted = selectedPiece?.position.x === x && selectedPiece?.position.y === y;

          return (
            <Square
              key={`${x}-${y}`}
              position={{ x, y }}
              piece={piece}
              isLight={isLight}
              isHighlighted={isHighlighted}
              onClick={() => handleSquareClick({ x, y })}
            />
          );
        })
      )}
    </div>
  );
};