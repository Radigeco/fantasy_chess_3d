import React from 'react';
import { useGameStore } from '../../store/gameStore';
import { Square } from './Square';
import { Position } from '../../types/chess';

export const ChessBoard: React.FC = () => {
  const { board, selectedPiece, movePiece } = useGameStore();

  const handleSquareClick = (position: Position) => {
    if (selectedPiece) {
      movePiece(selectedPiece.position, position);
    }
  };

  return (
    <group>
      {board.map((row, y) =>
        row.map((piece, x) => {
          const isLight = (x + y) % 2 === 0;
          const isHighlighted = selectedPiece?.position.x === x && selectedPiece?.position.y === y;

          return (
            <Square
              key={`${x}-${y}`}
              position={[x, 0, y]}
              piece={piece}
              isLight={isLight}
              isHighlighted={isHighlighted}
              onClick={() => handleSquareClick({ x, y })}
            />
          );
        })
      )}
    </group>
  );
};