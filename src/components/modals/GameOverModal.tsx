import React from 'react';
import { motion } from 'framer-motion';
import { PieceColor } from '../../types/chess';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { useGameStore } from '../../store/gameStore';

interface GameOverModalProps {
  winner: PieceColor;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({ winner }) => {
  const resetGame = useGameStore(state => state.resetGame);

  const handlePlayAgain = () => {
    resetGame();
  };

  return (
    <Modal isOpen={true} onClose={() => {}}>
      <div className="relative">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 15 }}
          className="flex justify-center mb-6"
        >
          <span className="text-6xl">🏆</span>
        </motion.div>

        <h2 className="text-3xl font-bold text-center mb-4">
          Game Over!
        </h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <p className="text-xl mb-2">
            {winner.charAt(0).toUpperCase() + winner.slice(1)} Wins!
          </p>
          <p className="text-gray-600">
            The {winner === 'white' ? 'black' : 'white'} king has been captured
          </p>
        </motion.div>

        <Button 
          onClick={handlePlayAgain}
          className="w-full"
        >
          Play Again
        </Button>
      </div>
    </Modal>
  );
};