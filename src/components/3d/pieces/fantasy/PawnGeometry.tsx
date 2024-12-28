import React from 'react';
import { GeometryProps } from '../types';

export const FantasyPawnGeometry: React.FC<GeometryProps> = ({ materialProps }) => (
  <group>
    {/* Base */}
    <mesh position={[0, 0, 0]} castShadow>
      <cylinderGeometry args={[0.2, 0.25, 0.1, 8]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Body */}
    <mesh position={[0, 0.25, 0]} castShadow>
      <cylinderGeometry args={[0.15, 0.2, 0.3, 8]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    {/* Crystal top */}
    <mesh position={[0, 0.45, 0]} castShadow>
      <octahedronGeometry args={[0.12]} />
      <meshStandardMaterial 
        {...materialProps}
        emissive={materialProps.color}
        emissiveIntensity={0.3}
      />
    </mesh>
  </group>
);