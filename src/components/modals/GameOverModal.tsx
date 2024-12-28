import React from 'react';
import { motion } from 'framer-motion';
import { PieceColor } from '../../types/chess';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

interface GameOverModalProps {
  winner: PieceColor;
  onPlayAgain: () => void;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({ winner, onPlayAgain }) => {
  return (
    <Modal isOpen={true} onClose={() => {}}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
      
      {/* Victory trophy animation */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 200
        }}
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

      <Button onClick={onPlayAgain} className="w-full">
        Play Again
      </Button>
    </Modal>
  );
};