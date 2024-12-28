import React from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { MoveHistory } from '../game/MoveHistory';
import { cn } from '../../utils/cn';

export const Footer: React.FC = () => {
  const { gameStarted } = useGameStore();

  if (!gameStarted) return null;

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'fixed bottom-0 left-0 right-0',
        'h-[20vh]',
        'bg-black/30 backdrop-blur-md',
        'border-t border-white/10'
      )}
    >
      <div className="container mx-auto h-full overflow-y-auto custom-scrollbar">
        <div className="py-4">
          <MoveHistory />
        </div>
      </div>
    </motion.footer>
  );
};