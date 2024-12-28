import { useFrame } from '@react-three/fiber';
import { RefObject } from 'react';
import * as THREE from 'three';

export const useSquareAnimation = (
  meshRef: RefObject<THREE.Mesh>,
  isSelected: boolean,
  isHovered: boolean
) => {
  useFrame(() => {
    if (!meshRef.current) return;
    
    const targetY = (isSelected || isHovered) ? 0.05 : 0;
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      targetY,
      0.1
    );
  });
};