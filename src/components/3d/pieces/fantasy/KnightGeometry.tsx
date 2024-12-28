import React from 'react';
import { GeometryProps } from '../types';

export const FantasyKnightGeometry: React.FC<GeometryProps> = ({ materialProps }) => (
  <group>
    {/* Base */}
    <mesh position={[0, 0, 0]} castShadow>
      <cylinderGeometry args={[0.25, 0.3, 0.1, 8]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Unicorn body */}
    <mesh position={[0, 0.3, 0]} rotation={[0.3, 0, 0]} castShadow>
      <cylinderGeometry args={[0.15, 0.2, 0.4, 8]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Head */}
    <mesh position={[0, 0.5, 0.1]} rotation={[-0.3, 0, 0]} castShadow>
      <coneGeometry args={[0.1, 0.3, 8]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Horn */}
    <mesh position={[0, 0.6, 0.2]} rotation={[-0.5, 0, 0]} castShadow>
      <coneGeometry args={[0.03, 0.3, 8]} />
      <meshStandardMaterial 
        {...materialProps}
        emissive={materialProps.color}
        emissiveIntensity={0.5}
      />
    </mesh>
  </group>
);