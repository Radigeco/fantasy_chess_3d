import React from 'react';
import { GeometryProps } from '../types';

export const DarkFantasyBishopGeometry: React.FC<GeometryProps> = ({ materialProps }) => (
  <group>
    {/* Base */}
    <mesh position={[0, 0, 0]} castShadow>
      <cylinderGeometry args={[0.25, 0.3, 0.1, 6]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Twisted body */}
    <mesh position={[0, 0.4, 0]} rotation={[0, Math.PI / 6, 0]} castShadow>
      <cylinderGeometry args={[0.15, 0.2, 0.6, 6]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Skull head */}
    <mesh position={[0, 0.7, 0]} castShadow>
      <sphereGeometry args={[0.12, 8, 8]} />
      <meshStandardMaterial 
        {...materialProps} 
        emissive="#300"
        emissiveIntensity={0.5}
      />
    </mesh>
    {/* Spikes */}
    {Array.from({ length: 3 }).map((_, i) => (
      <mesh
        key={i}
        position={[
          0.1 * Math.cos((i * 2 * Math.PI) / 3),
          0.8,
          0.1 * Math.sin((i * 2 * Math.PI) / 3)
        ]}
        rotation={[
          Math.random() * 0.2,
          0,
          (Math.random() - 0.5) * 0.2
        ]}
        castShadow
      >
        <coneGeometry args={[0.03, 0.15, 4]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
    ))}
  </group>
);