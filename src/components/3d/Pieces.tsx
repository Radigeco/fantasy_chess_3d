import React from 'react';
import { useGameStore } from '../../store/gameStore';
import { Piece } from './Piece';

export const Pieces: React.FC = () => {
  const { board } = useGameStore();

  return (
    <group>
      {board.map((row, y) =>
        row.map((piece, x) =>
          piece ? (
            <Piece
              key={`${x}-${y}`}
              piece={piece}
              position={[x, 0, y]}
            />
          ) : null
        )
      )}
    </group>
  );
};