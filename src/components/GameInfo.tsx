import React from 'react';
import { useGameStore } from '../store/gameStore';

export const GameInfo: React.FC = () => {
  const { currentTurn } = useGameStore();

  return (
    <div className="mt-8 text-center">
      <p className="text-purple-200 mb-2">
        Current Turn: <span className="font-bold capitalize">{currentTurn}</span>
      </p>
      <p className="text-purple-200">
        Click on a piece to select it, then click on a valid square to move
      </p>
    </div>
  );
};