import React from 'react';
import { GeometryProps } from '../types';

export const FantasyRookGeometry: React.FC<GeometryProps> = ({ materialProps }) => (
  <group>
    {/* Base */}
    <mesh position={[0, 0, 0]} castShadow>
      <cylinderGeometry args={[0.3, 0.35, 0.1, 8]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Tower body */}
    <mesh position={[0, 0.4, 0]} castShadow>
      <cylinderGeometry args={[0.25, 0.3, 0.7, 8]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Crystal battlements */}
    {Array.from({ length: 4 }).map((_, i) => (
      <mesh
        key={i}
        position={[
          0.15 * Math.cos((i * 2 * Math.PI) / 4),
          0.8,
          0.15 * Math.sin((i * 2 * Math.PI) / 4)
        ]}
        castShadow
      >
        <octahedronGeometry args={[0.08]} />
        <meshStandardMaterial 
          {...materialProps}
          emissive={materialProps.color}
          emissiveIntensity={0.3}
        />
      </mesh>
    ))}
  </group>
);