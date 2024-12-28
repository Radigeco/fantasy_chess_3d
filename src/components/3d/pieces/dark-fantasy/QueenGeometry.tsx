import React from 'react';
import { GeometryProps } from '../types';

export const DarkFantasyQueenGeometry: React.FC<GeometryProps> = ({ materialProps }) => (
  <group>
    {/* Base */}
    <mesh position={[0, 0, 0]} castShadow>
      <cylinderGeometry args={[0.3, 0.35, 0.1, 6]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Dark tower body */}
    <mesh position={[0, 0.3, 0]} castShadow>
      <cylinderGeometry args={[0.25, 0.3, 0.5, 6]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Crown spikes */}
    {Array.from({ length: 6 }).map((_, i) => (
      <group key={i}>
        <mesh
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
        <mesh
          position={[
            0.15 * Math.cos((i * 2 * Math.PI) / 6),
            0.7,
            0.15 * Math.sin((i * 2 * Math.PI) / 6)
          ]}
          castShadow
        >
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial 
            {...materialProps} 
            emissive="#300"
            emissiveIntensity={1}
            roughness={0}
          />
        </mesh>
      </group>
    ))}
    {/* Central orb */}
    <mesh position={[0, 0.85, 0]} castShadow>
      <sphereGeometry args={[0.12, 16, 16]} />
      <meshStandardMaterial 
        {...materialProps} 
        emissive="#500"
        emissiveIntensity={1}
        roughness={0}
      />
    </mesh>
  </group>
);