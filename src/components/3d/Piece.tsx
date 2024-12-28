import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { ChessPiece as ChessPieceType } from '../../types/chess';
import { useGameStore } from '../../store/gameStore';
import { useThemeStore } from '../../store/themeStore';
import { PieceGeometrySelector } from './pieces/PieceGeometrySelector';
import { getMaterialProps } from '../../utils/materialUtils';

interface PieceProps {
  piece: ChessPieceType;
  position: [number, number, number];
}

export const Piece: React.FC<PieceProps> = ({ piece, position }) => {
  const { selectedPiece } = useGameStore();
  const { getTheme } = useThemeStore();
  const theme = getTheme();
  const groupRef = useRef<THREE.Group>(null);
  
  const isSelected = selectedPiece?.position.x === piece.position.x && 
                    selectedPiece?.position.y === piece.position.y;

  useFrame(() => {
    if (!groupRef.current) return;
    
    const targetY = isSelected ? 0.5 : 0.2;
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      targetY,
      0.1
    );

    if (isSelected) {
      groupRef.current.rotation.y += 0.02;
    } else {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        0,
        0.1
      );
    }
  });

  const materialProps = getMaterialProps(theme, piece.color);

  return (
    <group
      ref={groupRef}
      position={[position[0], 0.2, position[2]]}
    >
      <PieceGeometrySelector 
        type={piece.type} 
        theme={theme}
        materialProps={materialProps}
      />

      {/* Shadow */}
      <mesh 
        rotation-x={-Math.PI / 2} 
        position={[0, -0.19, 0]}
        receiveShadow
      >
        <planeGeometry args={[0.6, 0.6]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </group>
  );
};