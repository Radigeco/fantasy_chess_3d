import React from 'react';
import { motion } from 'framer-motion';
import { Move } from '../../types/chess';
import { formatPosition } from '../../utils/moveFormatter';
import { cn } from '../../utils/cn';

interface MoveItemProps {
  move: Move;
  turnNumber: number;
  className?: string;
}

export const MoveItem: React.FC<MoveItemProps> = ({ move, turnNumber, className }) => {
  const getPieceEmoji = (type: string): string => {
    const pieces = {
      white: {
        king: '♔',
        queen: '♕',
        rook: '♖',
        bishop: '♗',
        knight: '♘',
        pawn: '♙'
      },
      black: {
        king: '♚',
        queen: '♛',
        rook: '♜',
        bishop: '♝',
        knight: '♞',
        pawn: '♟'
      }
    };
    return pieces[move.piece.color][move.piece.type];
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: move.piece.color === 'white' ? -20 : 20, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30
      }}
      className={cn(
        'p-3 rounded-lg transition-colors duration-200',
        'flex items-center space-x-3',
        'transform-gpu perspective-1000',
        'shadow-lg backdrop-blur-sm',
        className
      )}
    >
      <span className="text-white/50 w-8 font-mono">{turnNumber}.</span>
      <motion.span 
        className="text-3xl transform-gpu"
        whileHover={{ 
          scale: 1.2,
          rotateY: 180,
          transition: { duration: 0.3 }
        }}
        title={move.piece.type}
      >
        {getPieceEmoji(move.piece.type)}
      </motion.span>
      <div className="flex-1 flex items-center space-x-2">
        <span className="text-white/90 font-mono">
          {formatPosition(move.from)}
        </span>
        <motion.span 
          className="text-purple-400"
          animate={{ 
            x: [0, 5, 0],
            transition: { repeat: Infinity, duration: 1.5 }
          }}
        >
          →
        </motion.span>
        <span className="text-white/90 font-mono">
          {formatPosition(move.to)}
        </span>
        {move.capturedPiece && (
          <motion.span 
            className="text-red-400 ml-2 text-2xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ rotate: 360 }}
            title="Captured piece"
          >
            {getPieceEmoji(move.capturedPiece.type)}
          </motion.span>
        )}
      </div>
    </motion.div>
  );
};