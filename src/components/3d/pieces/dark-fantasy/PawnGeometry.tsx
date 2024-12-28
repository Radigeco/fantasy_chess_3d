import React from 'react';
import { GeometryProps } from '../types';

export const DarkFantasyPawnGeometry: React.FC<GeometryProps> = ({ materialProps }) => (
  <group>
    {/* Base */}
    <mesh position={[0, 0, 0]} castShadow>
      <cylinderGeometry args={[0.2, 0.25, 0.1, 6]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Body */}
    <mesh position={[0, 0.25, 0]} castShadow>
      <cylinderGeometry args={[0.15, 0.2, 0.3, 6]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Skull top */}
    <mesh position={[0, 0.45, 0]} castShadow>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshStandardMaterial 
        {...materialProps}
        emissive="#300"
        emissiveIntensity={0.3}
      />
    </mesh>
    {/* Small spikes */}
    {Array.from({ length: 3 }).map((_, i) => (
      <mesh
        key={i}
        position={[
          0.08 * Math.cos((i * 2 * Math.PI) / 3),
          0.5,
          0.08 * Math.sin((i * 2 * Math.PI) / 3)
        ]}
        rotation={[
          Math.random() * 0.2,
          0,
          (Math.random() - 0.5) * 0.2
        ]}
        castShadow
      >
        <coneGeometry args={[0.02, 0.1, 4]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
    ))}
  </group>
);