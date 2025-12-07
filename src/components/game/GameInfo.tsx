import React from 'react';
import { useGameStore } from '../../store/gameStore';

export const GameInfo: React.FC = () => {
  const { currentTurn, gameMode, playerColor } = useGameStore();

  return (
    <div className="bg-black/30 border border-white/10 rounded-2xl backdrop-blur-lg p-6 shadow-xl space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.2em] text-white/60">Match status</p>
        <span className="text-lg" aria-hidden>
          ⏱
        </span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-purple-100/80">Current Turn</p>
        <span className="font-semibold capitalize">{currentTurn}</span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-purple-100/80">Mode</p>
        <span className="font-semibold">
          {gameMode === 'ai' ? 'Player vs AI' : 'Local Multiplayer'}
        </span>
      </div>
      {gameMode === 'ai' && (
        <div className="flex items-center justify-between">
          <p className="text-purple-100/80">Your color</p>
          <span className="font-semibold capitalize">{playerColor}</span>
        </div>
      )}
    </div>
  );
};
