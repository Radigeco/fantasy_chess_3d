import { useFrame } from '@react-three/fiber';
import { RefObject } from 'react';
import * as THREE from 'three';

export const usePieceAnimation = (
  groupRef: RefObject<THREE.Group>,
  isSelected: boolean
) => {
  useFrame(() => {
    if (!groupRef.current) return;

    // Hover animation
    const targetY = isSelected ? 0.5 : 0;
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      targetY,
      0.1
    );

    // Rotation animation when selected
    if (isSelected) {
      groupRef.current.rotation.y += 0.01;
    }
  });
};