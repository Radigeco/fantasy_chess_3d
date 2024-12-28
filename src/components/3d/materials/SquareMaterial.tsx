import React from 'react';
import { BoardTheme } from '../../../types/theme';

interface SquareMaterialProps {
  isLight: boolean;
  isSelected: boolean;
  isHovered: boolean;
  theme: BoardTheme;
}

export const SquareMaterial: React.FC<SquareMaterialProps> = ({ 
  isLight, 
  isSelected,
  isHovered,
  theme 
}) => {
  const getSquareColor = () => {
    switch (theme.name) {
      case 'Classic Chess':
        return isLight ? '#f0d9b5' : '#b58863';
      case 'Fantasy Light':
        return isLight ? '#ffe4c4' : '#8b4513';
      case 'Dark Fantasy':
        return isLight ? '#4a4a4a' : '#1a1a1a';
      default:
        return isLight ? '#f0d9b5' : '#b58863';
    }
  };

  const getEmissiveColor = () => {
    if (isSelected) return theme.name === 'Dark Fantasy' ? '#7b2cbf' : '#4a9eff';
    if (isHovered) return theme.name === 'Dark Fantasy' ? '#4a1c7b' : '#2a5999';
    return '#000000';
  };

  return (
    <meshStandardMaterial
      color={getSquareColor()}
      metalness={theme.name === 'Dark Fantasy' ? 0.3 : 0.1}
      roughness={theme.name === 'Dark Fantasy' ? 0.7 : 0.8}
      emissive={getEmissiveColor()}
      emissiveIntensity={isSelected ? 0.5 : isHovered ? 0.3 : 0}
    />
  );
};