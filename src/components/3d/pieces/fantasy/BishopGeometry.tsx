import React from 'react';
import { GeometryProps } from '../types';

export const FantasyBishopGeometry: React.FC<GeometryProps> = ({ materialProps }) => (
  <group>
    {/* Base */}
    <mesh position={[0, 0, 0]} castShadow>
      <cylinderGeometry args={[0.25, 0.3, 0.1, 8]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Crystal staff */}
    <mesh position={[0, 0.4, 0]} castShadow>
      <cylinderGeometry args={[0.08, 0.1, 0.6, 8]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Crystal head */}
    <mesh position={[0, 0.7, 0]} castShadow>
      <octahedronGeometry args={[0.15]} />
      <meshStandardMaterial 
        {...materialProps} 
        emissive={materialProps.color} 
        emissiveIntensity={0.5}
      />
    </mesh>
    {/* Floating crystals */}
    {Array.from({ length: 4 }).map((_, i) => (
      <mesh
        key={i}
        position={[
          0.15 * Math.cos((i * 2 * Math.PI) / 4),
          0.7,
          0.15 * Math.sin((i * 2 * Math.PI) / 4)
        ]}
        castShadow
      >
        <tetrahedronGeometry args={[0.06]} />
        <meshStandardMaterial 
          {...materialProps} 
          emissive={materialProps.color} 
          emissiveIntensity={0.3}
        />
      </mesh>
    ))}
  </group>
);