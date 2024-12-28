import React from 'react';
import { useGameStore } from '../../store/gameStore';

export const GameInfo: React.FC = () => {
  const { currentTurn, gameMode, playerColor } = useGameStore();

  return (
    <div className="mt-8 text-center">
      <p className="text-purple-200 mb-2">
        Current Turn: <span className="font-bold capitalize">{currentTurn}</span>
      </p>
      <p className="text-purple-200">
        {gameMode === 'ai' 
          ? `You are playing as ${playerColor} against AI`
          : 'Playing against another player'}
      </p>
    </div>
  );
};