import React from 'react';
import { GeometryProps } from '../types';

export const FantasyKingGeometry: React.FC<GeometryProps> = ({ materialProps }) => (
  <group>
    {/* Crown base */}
    <mesh position={[0, 0, 0]} castShadow>
      <cylinderGeometry args={[0.3, 0.35, 0.1, 8]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Ornate middle */}
    <mesh position={[0, 0.3, 0]} castShadow>
      <cylinderGeometry args={[0.25, 0.3, 0.5, 8]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Crown points */}
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
        <coneGeometry args={[0.05, 0.2, 4]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
    ))}
    {/* Crystal top */}
    <mesh position={[0, 0.8, 0]} castShadow>
      <octahedronGeometry args={[0.15]} />
      <meshStandardMaterial {...materialProps} emissive={materialProps.color} emissiveIntensity={0.5} />
    </mesh>
  </group>
);