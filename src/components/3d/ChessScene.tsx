import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { ChessBoard } from './ChessBoard';
import { Pieces } from './Pieces';

export const ChessScene: React.FC = () => {
  return (
    <div className="w-full h-screen">
      <Canvas shadows camera={{ position: [8, 8, 8], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        
        <Suspense fallback={null}>
          <Environment preset="city" />
          <group position={[-3.5, 0, -3.5]}>
            <ChessBoard />
            <Pieces />
          </group>
          <OrbitControls
            target={[0, 0, 0]}
            maxPolarAngle={Math.PI / 2}
            minDistance={5}
            maxDistance={15}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};