import React from 'react';
import { PieceMaterial } from '../materials/PieceMaterial';

interface PieceBaseProps {
  color: 'white' | 'black';
}

export const PieceBase: React.FC<PieceBaseProps> = ({ color }) => {
  return (
    <mesh castShadow position={[0, 0.1, 0]}>
      <cylinderGeometry args={[0.3, 0.35, 0.2]} />
      <PieceMaterial color={color} />
    </mesh>
  );
};