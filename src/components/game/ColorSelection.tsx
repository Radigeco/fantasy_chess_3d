import React from 'react';
import { PieceColor, GameMode } from '../../types/chess';
import { useGameStore } from '../../store/gameStore';

export const ColorSelection: React.FC = () => {
  const { startGame, gameStarted } = useGameStore();

  if (gameStarted) return null;

  const handleColorSelect = (color: PieceColor, mode: GameMode) => {
    console.log('Starting game:', { color, mode }); // Debug log
    startGame(color, mode);
  };

  return (
    <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm text-center mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">Choose Your Side</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <h3 className="text-xl text-purple-200 mb-2">Play vs AI</h3>
          <button
            onClick={() => handleColorSelect('white', 'ai')}
            className="w-full px-6 py-3 bg-white text-purple-900 rounded-lg hover:bg-purple-100 transition-colors"
          >
            Play as White
          </button>
          <button
            onClick={() => handleColorSelect('black', 'ai')}
            className="w-full px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Play as Black
          </button>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl text-purple-200 mb-2">Play vs Human</h3>
          <button
            onClick={() => handleColorSelect('white', 'human')}
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-colors"
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};