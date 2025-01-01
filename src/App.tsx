import React from 'react';
import { ChessScene } from './components/3d/ChessScene';
import { GameInfo } from './components/game/GameInfo';
import { ColorSelection } from './components/game/ColorSelection';
import { GameOverModal } from './components/modals/GameOverModal';
import { ThemeSelector } from './components/ui/ThemeSelector';
import { Footer } from './components/layout/Footer';
import { useGameStore } from './store/gameStore';
import { useThemeStore } from './store/themeStore';
import { cn } from './utils/cn';

function App() {
  const { gameStarted, gameOver, winner } = useGameStore();
  const { getTheme } = useThemeStore();
  const theme = getTheme();

  return (
    <div className={cn(
      'min-h-screen',
      'bg-gradient-to-br',
      theme.background
    )}>
      <div className="absolute top-4 right-4 z-50">
        <ThemeSelector />
      </div>

      {!gameStarted && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <ColorSelection />
        </div>
      )}

      <ChessScene />

      {gameStarted && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <GameInfo />
        </div>
      )}

      {gameOver && winner && (
        <GameOverModal winner={winner} />
      )}

      <Footer />
    </div>
  );
}

export default App;