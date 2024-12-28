import React from 'react';

interface PieceMaterialProps {
  color: 'white' | 'black';
}

export const PieceMaterial: React.FC<PieceMaterialProps> = ({ color }) => {
  return (
    <meshStandardMaterial 
      color={color === 'white' ? '#ffffff' : '#222222'}
      metalness={0.7}
      roughness={0.2}
    />
  );
};