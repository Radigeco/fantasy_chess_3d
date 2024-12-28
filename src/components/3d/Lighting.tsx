import React from 'react';
import { BoardTheme } from '../../types/theme';

interface LightingProps {
  theme: BoardTheme;
}

export const Lighting: React.FC<LightingProps> = ({ theme }) => {
  const getLightingConfig = () => {
    switch (theme.name) {
      case 'Classic Chess':
        return {
          ambient: 0.7,
          directional: 1.5,
          point1: { color: '#ff7700', intensity: 0.5 },
          point2: { color: '#0077ff', intensity: 0.3 }
        };
      case 'Fantasy Light':
        return {
          ambient: 0.8,
          directional: 1.2,
          point1: { color: '#ffd700', intensity: 0.7 },
          point2: { color: '#ff4500', intensity: 0.4 }
        };
      case 'Dark Fantasy':
        return {
          ambient: 0.4,
          directional: 0.8,
          point1: { color: '#7b2cbf', intensity: 0.6 },
          point2: { color: '#3a0ca3', intensity: 0.5 }
        };
      default:
        return {
          ambient: 0.7,
          directional: 1.5,
          point1: { color: '#ff7700', intensity: 0.5 },
          point2: { color: '#0077ff', intensity: 0.3 }
        };
    }
  };

  const config = getLightingConfig();

  return (
    <>
      <ambientLight intensity={config.ambient} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={config.directional}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight 
        position={[-5, 5, -5]} 
        intensity={config.point1.intensity} 
        color={config.point1.color} 
      />
      <pointLight 
        position={[5, 3, 5]} 
        intensity={config.point2.intensity} 
        color={config.point2.color} 
      />
    </>
  );
};