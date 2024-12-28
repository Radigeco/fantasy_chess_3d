import React from 'react';
import { motion } from 'framer-motion';
import { Position, ChessPiece } from '../../types/chess';
import { useGameStore } from '../../store/gameStore';
import { useThemeStore } from '../../store/themeStore';
import { ChessPiece as ChessPieceComponent } from './ChessPiece';
import { MoveIndicator } from './MoveIndicator';
import { cn } from '../../utils/cn';
import { MOVE_ANIMATION_DURATION } from '../../utils/constants';
import { isValidMove } from '../../utils/chessLogic';

interface SquareProps {
  position: Position;
  piece: ChessPiece | null;
  isLight: boolean;
  isHighlighted: boolean;
  onClick: () => void;
}

export const Square: React.FC<SquareProps> = ({
  position,
  piece,
  isLight,
  isHighlighted,
  onClick,
}) => {
  const { setSelectedPiece, selectedPiece, currentTurn, board } = useGameStore();
  const { getTheme } = useThemeStore();
  const theme = getTheme();

  const handleClick = () => {
    if (piece && piece.color === currentTurn) {
      setSelectedPiece(piece);
    } else {
      onClick();
    }
  };

  const showMoveIndicator = selectedPiece && isValidMove(selectedPiece, position, board);
  const showCaptureIndicator = showMoveIndicator && piece && piece.color !== selectedPiece.color;

  // Calculate 3D position
  const x = position.x - 3.5;
  const y = position.y - 3.5;
  const z = isHighlighted ? 0.5 : 0;

  return (
    <motion.div
      className={cn(
        'relative w-20 h-20 preserve-3d',
        'transition-all duration-300'
      )}
      style={{
        transform: `translate3d(${x * 2}px, ${y * 2}px, ${z * 20}px)`
      }}
      whileHover={{ z: 10, scale: 1.1 }}
      onClick={handleClick}
    >
      {/* Square base */}
      <motion.div
        className={cn(
          'absolute inset-0 rounded-sm',
          'bg-gradient-to-br shadow-inner',
          isLight ? theme.squares.light : theme.squares.dark,
          isHighlighted && theme.squares.selected
        )}
        initial={false}
        animate={{
          scale: isHighlighted ? 1.05 : 1,
          z: isHighlighted ? 10 : 0
        }}
      >
        {/* Square side (depth effect) */}
        <div
          className={cn(
            'absolute left-0 right-0 h-4 -bottom-4',
            'origin-top transform-gpu',
            'bg-gradient-to-b',
            isLight 
              ? 'from-amber-200/50 to-amber-300/50'
              : 'from-amber-800/50 to-amber-900/50'
          )}
          style={{
            transform: 'rotateX(-90deg)',
            transformOrigin: 'top'
          }}
        />
      </motion.div>

      {/* Move indicators */}
      {showMoveIndicator && !showCaptureIndicator && (
        <MoveIndicator type="possible" />
      )}
      {showCaptureIndicator && (
        <MoveIndicator type="capture" />
      )}

      {/* Chess piece */}
      {piece && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center preserve-3d"
          layoutId={`piece-${piece.position.x}-${piece.position.y}`}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: MOVE_ANIMATION_DURATION
          }}
        >
          <ChessPieceComponent
            piece={piece}
            isSelected={isHighlighted}
          />
        </motion.div>
      )}
    </motion.div>
  );
};