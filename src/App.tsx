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
    <div
      className={cn(
        'min-h-screen relative overflow-hidden text-white',
        'bg-gradient-to-br',
        theme.background
      )}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute right-10 top-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute left-1/3 bottom-10 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <header className="relative z-20 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">♜</span>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/60">Fantasy Arena</p>
            <p className="text-lg font-semibold">3D Chess Experience</p>
          </div>
        </div>
        <ThemeSelector />
      </header>

      <main className="relative z-20 container mx-auto px-4 pb-28">
        <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr] items-start">
          <div className="bg-black/20 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md p-4">
            <ChessScene />
          </div>

          <div className="space-y-4">
            <ColorSelection />
            {gameStarted && <GameInfo />}
          </div>
        </div>
      </main>

      {gameOver && winner && <GameOverModal winner={winner} />}

      <Footer />
    </div>
  );
}

export default App;
