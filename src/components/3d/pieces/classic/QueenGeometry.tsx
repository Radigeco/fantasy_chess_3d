import React from 'react';
import { GeometryProps } from '../types';

export const QueenGeometry: React.FC<GeometryProps> = ({ materialProps }) => (
  <group>
    <mesh position={[0, 0, 0]} castShadow>
      <cylinderGeometry args={[0.25, 0.3, 0.1, 16]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    <mesh position={[0, 0.3, 0]} castShadow>
      <cylinderGeometry args={[0.2, 0.25, 0.4, 16]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    <mesh position={[0, 0.55, 0]} castShadow>
      <cylinderGeometry args={[0.25, 0.2, 0.2, 16]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {Array.from({ length: 5 }).map((_, i) => (
      <mesh
        key={i}
        position={[
          0.15 * Math.cos((i * 2 * Math.PI) / 5),
          0.7,
          0.15 * Math.sin((i * 2 * Math.PI) / 5)
        ]}
        castShadow
      >
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
    ))}
  </group>
);