import React from 'react';
import { motion } from 'framer-motion';
import { ChessPiece as ChessPieceType } from '../../types/chess';
import { useThemeStore } from '../../store/themeStore';
import { cn } from '../../utils/cn';

interface ChessPieceProps {
  piece: ChessPieceType;
  isSelected?: boolean;
}

export const ChessPiece: React.FC<ChessPieceProps> = ({ piece, isSelected }) => {
  const { getTheme } = useThemeStore();
  const theme = getTheme();
  const pieceTheme = theme.pieces[piece.color][piece.type];

  return (
    <motion.div
      initial="initial"
      animate={isSelected ? "selected" : "idle"}
      whileHover="hover"
      variants={{
        initial: { scale: 1, y: 0, rotateX: 0 },
        idle: { scale: 1, y: 0, rotateX: 0 },
        selected: {
          scale: 1.2,
          y: -20,
          rotateX: [0, -10, 0],
          transition: {
            y: {
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            },
            rotateX: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }
        },
        hover: {
          scale: 1.1,
          y: -10,
          rotateX: -15,
          transition: { duration: 0.3 }
        }
      }}
      className="preserve-3d"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Piece shadow */}
      <div
        className={cn(
          'absolute -bottom-2 left-1/2 w-8 h-8',
          'rounded-full blur-md opacity-30',
          'bg-black transform -translate-x-1/2'
        )}
      />

      {/* Piece body */}
      <motion.div
        className={cn(
          'relative text-4xl transform-gpu',
          'flex items-center justify-center',
          'w-16 h-16 rounded-full',
          piece.color === 'white'
            ? 'bg-gradient-to-br from-white/90 to-gray-200/90'
            : 'bg-gradient-to-br from-gray-800/90 to-black/90',
          'shadow-lg backdrop-blur-sm'
        )}
      >
        {/* Piece symbol */}
        <span className={cn(
          'transform-gpu transition-all duration-300',
          'select-none z-10',
          piece.color === 'white' ? 'text-white' : 'text-gray-900',
          theme.name === 'Dark Fantasy' && piece.color === 'black' && 'text-purple-200'
        )}>
          {pieceTheme.symbol}
        </span>

        {/* Piece glow */}
        <div className={cn(
          'absolute inset-0 rounded-full opacity-0',
          'group-hover:opacity-50 transition-opacity',
          piece.color === 'white'
            ? 'bg-blue-400/30'
            : 'bg-purple-600/30'
        )} />
      </motion.div>

      {/* Tooltip */}
      <div className={cn(
        'absolute -bottom-8 left-1/2 transform -translate-x-1/2',
        'px-2 py-1 bg-black/80 text-white text-xs rounded-md',
        'opacity-0 group-hover:opacity-100 transition-opacity',
        'pointer-events-none whitespace-nowrap z-20'
      )}>
        {pieceTheme.name}
      </div>
    </motion.div>
  );
};