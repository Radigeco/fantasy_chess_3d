import React from 'react';
import { GeometryProps } from '../types';

export const PawnGeometry: React.FC<GeometryProps> = ({ materialProps }) => (
  <group>
    <mesh position={[0, 0, 0]} castShadow>
      <cylinderGeometry args={[0.2, 0.25, 0.1, 16]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    <mesh position={[0, 0.2, 0]} castShadow>
      <cylinderGeometry args={[0.15, 0.2, 0.3, 16]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    <mesh position={[0, 0.4, 0]} castShadow>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
  </group>
);