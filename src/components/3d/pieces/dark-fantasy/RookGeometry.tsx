import React from 'react';
import { GeometryProps } from '../types';

export const DarkFantasyRookGeometry: React.FC<GeometryProps> = ({ materialProps }) => (
  <group>
    {/* Base */}
    <mesh position={[0, 0, 0]} castShadow>
      <cylinderGeometry args={[0.3, 0.35, 0.1, 6]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Tower body */}
    <mesh position={[0, 0.4, 0]} castShadow>
      <cylinderGeometry args={[0.25, 0.3, 0.7, 6]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Spikes */}
    {Array.from({ length: 6 }).map((_, i) => (
      <mesh
        key={i}
        position={[
          0.15 * Math.cos((i * 2 * Math.PI) / 6),
          0.8,
          0.15 * Math.sin((i * 2 * Math.PI) / 6)
        ]}
        rotation={[
          Math.random() * 0.2,
          0,
          (Math.random() - 0.5) * 0.2
        ]}
        castShadow
      >
        <coneGeometry args={[0.04, 0.2, 4]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
    ))}
  </group>
);