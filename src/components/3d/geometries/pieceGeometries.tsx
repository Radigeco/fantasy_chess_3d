import React from 'react';
import { PieceType } from '../../../types/chess';

export const getPieceGeometry = (type: PieceType) => {
  switch (type) {
    case 'pawn':
      return <cylinderGeometry args={[0.2, 0.2, 0.3]} />;
    case 'rook':
      return <boxGeometry args={[0.3, 0.4, 0.3]} />;
    case 'knight':
      return <cylinderGeometry args={[0.2, 0.25, 0.4]} />;
    case 'bishop':
      return <coneGeometry args={[0.2, 0.5, 8]} />;
    case 'queen':
      return <cylinderGeometry args={[0.25, 0.2, 0.6, 8]} />;
    case 'king':
      return <cylinderGeometry args={[0.25, 0.2, 0.7, 8]} />;
    default:
      return <boxGeometry args={[0.3, 0.4, 0.3]} />;
  }
};