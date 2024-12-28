import React from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { Square } from './Square';
import { Position } from '../../types/chess';
import { cn } from '../../utils/cn';

export const ChessBoard: React.FC = () => {
  const { board, selectedPiece, movePiece } = useGameStore();

  const handleSquareClick = (position: Position) => {
    if (selectedPiece) {
      movePiece(selectedPiece.position, position);
    }
  };

  return (
    <motion.div
      initial={{ rotateX: 45, scale: 0.9, opacity: 0 }}
      animate={{ rotateX: 45, scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-[640px] h-[640px] preserve-3d"
    >
      {/* Board shadow */}
      <div className="chess-board-shadow" />
      
      {/* Chess board */}
      <motion.div 
        className={cn(
          'absolute inset-0 grid grid-cols-8',
          'bg-gradient-to-br from-amber-900/90 to-amber-800/90',
          'p-4 rounded-lg shadow-2xl',
          'border border-amber-700/50'
        )}
        initial={false}
        animate={{ scale: selectedPiece ? 1.02 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg"
          animate={{
            opacity: selectedPiece ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        
        {board.map((row, y) =>
          row.map((piece, x) => {
            const isLight = (x + y) % 2 === 0;
            const isHighlighted = selectedPiece?.position.x === x && selectedPiece?.position.y === y;

            return (
              <Square
                key={`${x}-${y}`}
                position={{ x, y }}
                piece={piece}
                isLight={isLight}
                isHighlighted={isHighlighted}
                onClick={() => handleSquareClick({ x, y })}
              />
            );
          })
        )}
      </motion.div>
    </motion.div>
  );
};