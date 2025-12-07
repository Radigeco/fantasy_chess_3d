import React from 'react';
import { PieceColor, GameMode } from '../../types/chess';
import { useGameStore } from '../../store/gameStore';

export const ColorSelection: React.FC = () => {
  const { startGame, gameStarted } = useGameStore();

  if (gameStarted) return null;

  const handleColorSelect = (color: PieceColor, mode: GameMode) => {
    startGame(color, mode);
  };

  return (
    <div className="bg-white/10 border border-white/10 rounded-2xl backdrop-blur-md p-6 shadow-xl">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">Choose your path</p>
          <h2 className="text-2xl font-bold text-white">Launch a new match</h2>
        </div>
        <span className="text-3xl" aria-hidden>
          ⚡
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <h3 className="text-sm text-purple-100/80">Play vs AI</h3>
          <button
            onClick={() => handleColorSelect('white', 'ai')}
            className="w-full px-6 py-3 rounded-lg bg-white text-purple-900 font-semibold shadow hover:-translate-y-0.5 transition-transform"
          >
            Play as White
          </button>
          <button
            onClick={() => handleColorSelect('black', 'ai')}
            className="w-full px-6 py-3 rounded-lg bg-gray-900/80 text-white font-semibold border border-white/10 hover:-translate-y-0.5 transition-transform"
          >
            Play as Black
          </button>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm text-purple-100/80">Play vs Human</h3>
          <button
            onClick={() => handleColorSelect('white', 'human')}
            className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-transform"
          >
            Start Game
          </button>
          <p className="text-xs text-white/60">
            Local two-player match. White opens the game.
          </p>
        </div>
      </div>
    </div>
  );
};
