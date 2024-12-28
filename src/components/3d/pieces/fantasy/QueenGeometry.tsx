import React from 'react';
import { GeometryProps } from '../types';

export const FantasyQueenGeometry: React.FC<GeometryProps> = ({ materialProps }) => (
  <group>
    {/* Base */}
    <mesh position={[0, 0, 0]} castShadow>
      <cylinderGeometry args={[0.3, 0.35, 0.1, 8]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Crystal body */}
    <mesh position={[0, 0.3, 0]} castShadow>
      <cylinderGeometry args={[0.25, 0.3, 0.5, 8]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Crown */}
    {Array.from({ length: 8 }).map((_, i) => (
      <mesh
        key={i}
        position={[
          0.2 * Math.cos((i * 2 * Math.PI) / 8),
          0.6,
          0.2 * Math.sin((i * 2 * Math.PI) / 8)
        ]}
        castShadow
      >
        <octahedronGeometry args={[0.08]} />
        <meshStandardMaterial {...materialProps} emissive={materialProps.color} emissiveIntensity={0.3} />
      </mesh>
    ))}
    {/* Top crystal */}
    <mesh position={[0, 0.8, 0]} castShadow>
      <dodecahedronGeometry args={[0.12]} />
      <meshStandardMaterial {...materialProps} emissive={materialProps.color} emissiveIntensity={0.5} />
    </mesh>
  </group>
);