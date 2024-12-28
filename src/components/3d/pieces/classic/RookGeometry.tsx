import React from 'react';
import { GeometryProps } from '../types';

export const RookGeometry: React.FC<GeometryProps> = ({ materialProps }) => (
  <group>
    <mesh position={[0, 0, 0]} castShadow>
      <cylinderGeometry args={[0.25, 0.3, 0.1, 16]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    <mesh position={[0, 0.25, 0]} castShadow>
      <cylinderGeometry args={[0.2, 0.25, 0.4, 16]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    <mesh position={[0, 0.5, 0]} castShadow>
      <cylinderGeometry args={[0.25, 0.2, 0.2, 16]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {[-0.1, 0.1].map((x, i) => (
      <mesh key={i} position={[x, 0.6, 0]} castShadow>
        <boxGeometry args={[0.08, 0.15, 0.08]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
    ))}
  </group>
);