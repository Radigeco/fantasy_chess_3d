import React from 'react';
import { GeometryProps } from '../types';

export const BishopGeometry: React.FC<GeometryProps> = ({ materialProps }) => (
  <group>
    <mesh position={[0, 0, 0]} castShadow>
      <cylinderGeometry args={[0.2, 0.25, 0.1, 16]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    <mesh position={[0, 0.3, 0]} castShadow>
      <coneGeometry args={[0.2, 0.5, 16]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    <mesh position={[0, 0.6, 0]} castShadow>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    <mesh position={[0, 0.75, 0]} castShadow>
      <boxGeometry args={[0.08, 0.2, 0.08]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    <mesh position={[0, 0.8, 0]} castShadow>
      <boxGeometry args={[0.2, 0.08, 0.08]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
  </group>
);