import React from 'react';

interface GeometryProps {
  materialProps: any;
}

export const KnightGeometry: React.FC<GeometryProps> = ({ materialProps }) => (
  <group>
    <mesh position={[0, 0, 0]} castShadow>
      <cylinderGeometry args={[0.2, 0.25, 0.1, 16]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    <mesh position={[0, 0.2, 0]} castShadow>
      <cylinderGeometry args={[0.15, 0.2, 0.2, 16]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    <mesh position={[0, 0.4, -0.1]} rotation={[Math.PI / 6, 0, 0]} castShadow>
      <cylinderGeometry args={[0.12, 0.15, 0.4, 16]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
    <mesh position={[0, 0.45, 0.05]} rotation={[-Math.PI / 6, 0, 0]} castShadow>
      <boxGeometry args={[0.1, 0.3, 0.1]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
  </group>
);