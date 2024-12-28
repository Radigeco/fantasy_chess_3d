import React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { ChessPiece as ChessPieceType } from '../../types/chess';
import { useGameStore } from '../../store/gameStore';
import { useThemeStore } from '../../store/themeStore';
import { PieceGeometrySelector } from './pieces/PieceGeometrySelector';
import { getMaterialProps } from '../../utils/materialUtils';

interface SquareProps {
  position: [number, number, number];
  piece: ChessPieceType | null;
  isLight: boolean;
  isHighlighted: boolean;
  onClick: () => void;
}

export const Square: React.FC<SquareProps> = ({
  position,
  piece,
  isLight,
  isHighlighted,
  onClick,
}) => {
  const { selectedPiece, setSelectedPiece, currentTurn } = useGameStore();
  const { getTheme } = useThemeStore();
  const theme = getTheme();
  const groupRef = React.useRef<THREE.Group>(null);

  const handleClick = () => {
    if (piece && piece.color === currentTurn) {
      if (selectedPiece && 
          (selectedPiece.position.x !== piece.position.x || 
           selectedPiece.position.y !== piece.position.y)) {
        setSelectedPiece(piece);
      } else {
        setSelectedPiece(selectedPiece ? null : piece);
      }
    } else {
      onClick();
    }
  };

  useFrame(() => {
    if (!groupRef.current) return;
    
    const targetY = isHighlighted ? 0.05 : 0;
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      targetY,
      0.1
    );
  });

  const materialProps = piece ? getMaterialProps(theme, piece.color) : undefined;

  return (
    <group ref={groupRef} onClick={handleClick}>
      {/* Square tile */}
      <mesh 
        position={position} 
        receiveShadow
      >
        <boxGeometry args={[1, 0.1, 1]} />
        <meshStandardMaterial 
          color={isLight ? '#f0d9b5' : '#b58863'}
          metalness={0.1}
          roughness={0.8}
          emissive={isHighlighted ? '#4a9eff' : '#000000'}
          emissiveIntensity={isHighlighted ? 0.5 : 0}
        />
      </mesh>

      {/* Chess piece */}
      {piece && (
        <group position={[position[0], 0.2, position[2]]}>
          <PieceGeometrySelector 
            type={piece.type} 
            theme={theme}
            materialProps={materialProps!}
          />
        </group>
      )}
    </group>
  );
};