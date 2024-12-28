import React from 'react';
import { GeometryProps } from '../types';

export const DarkFantasyKnightGeometry: React.FC<GeometryProps> = ({ materialProps }) => (
  <group>
    {/* Base */}
    <mesh position={[0, 0, 0]} castShadow>
      <cylinderGeometry args={[0.25, 0.3, 0.1, 6]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Dragon body */}
    <mesh position={[0, 0.3, 0]} rotation={[0.3, 0, 0]} castShadow>
      <cylinderGeometry args={[0.15, 0.2, 0.4, 6]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Head */}
    <mesh position={[0, 0.5, 0.1]} rotation={[-0.3, 0, 0]} castShadow>
      <coneGeometry args={[0.12, 0.25, 6]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Horns */}
    {[-1, 1].map((side, i) => (
      <mesh
        key={i}
        position={[0.08 * side, 0.6, 0.15]}
        rotation={[-0.5, 0, 0.3 * side]}
        castShadow
      >
        <coneGeometry args={[0.02, 0.2, 4]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
    ))}
  </group>
);