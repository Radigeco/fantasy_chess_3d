import React from 'react';
import { GeometryProps } from '../types';

export const DarkFantasyKingGeometry: React.FC<GeometryProps> = ({ materialProps }) => (
  <group>
    {/* Skull base */}
    <mesh position={[0, 0, 0]} castShadow>
      <cylinderGeometry args={[0.3, 0.35, 0.1, 6]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Dark tower body */}
    <mesh position={[0, 0.3, 0]} castShadow>
      <cylinderGeometry args={[0.25, 0.3, 0.5, 6]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Spikes */}
    {Array.from({ length: 6 }).map((_, i) => (
      <mesh
        key={i}
        position={[
          0.2 * Math.cos((i * 2 * Math.PI) / 6),
          0.6,
          0.2 * Math.sin((i * 2 * Math.PI) / 6)
        ]}
        rotation={[
          Math.random() * 0.2,
          0,
          (Math.random() - 0.5) * 0.2
        ]}
        castShadow
      >
        <coneGeometry args={[0.04, 0.25, 4]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
    ))}
    {/* Dark orb */}
    <mesh position={[0, 0.8, 0]} castShadow>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial 
        {...materialProps} 
        emissive="#300"
        emissiveIntensity={1}
        roughness={0}
      />
    </mesh>
  </group>
);