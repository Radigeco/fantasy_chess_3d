import React from 'react';

interface GeometryProps {
  materialProps: any;
}

export const KingGeometry: React.FC<GeometryProps> = ({ materialProps }) => (
  <group>
    <mesh position={[0, 0, 0]} castShadow>
      <cylinderGeometry args={[0.25, 0.3, 0.1, 16]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    <mesh position={[0, 0.3, 0]} castShadow>
      <cylinderGeometry args={[0.2, 0.25, 0.4, 16]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    <mesh position={[0, 0.55, 0]} castShadow>
      <cylinderGeometry args={[0.25, 0.2, 0.2, 16]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    <mesh position={[0, 0.7, 0]} castShadow>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    <mesh position={[0, 0.85, 0]} castShadow>
      <boxGeometry args={[0.08, 0.2, 0.08]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    <mesh position={[0, 0.9, 0]} castShadow>
      <boxGeometry args={[0.25, 0.08, 0.08]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
  </group>
);