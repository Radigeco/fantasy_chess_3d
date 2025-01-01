import React from 'react';
import { motion } from 'framer-motion';
import { Position, ChessPiece } from '../../types/chess';
import { useGameStore } from '../../store/gameStore';
import { useThemeStore } from '../../store/themeStore';
import { ChessPiece as ChessPieceComponent } from './ChessPiece';
import { MoveIndicator } from './MoveIndicator';
import { cn } from '../../utils/cn';
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
      setSelectedPiece(selectedPiece?.position.x === position.x && 
                      selectedPiece?.position.y === position.y ? null : piece);
    } else {
      onClick();
    }
  };

  // Determine if this square is a valid move target
  const isValidMoveTarget = selectedPiece && isValidMove(selectedPiece, position, board);
  const isCapture = isValidMoveTarget && piece && piece.color !== selectedPiece.color;

  return (
    <motion.div
      className={cn(
        'relative w-20 h-20',
        'cursor-pointer'
      )}
      whileHover={{ scale: 1.05 }}
      onClick={handleClick}
    >
      {/* Square base */}
      <div
        className={cn(
          'absolute inset-0 rounded-sm',
          'bg-gradient-to-br shadow-inner',
          isLight ? theme.squares.light : theme.squares.dark,
          isHighlighted && theme.squares.selected
        )}
      />

      {/* Move indicators */}
      {isValidMoveTarget && (
        <MoveIndicator 
          type={isCapture ? 'capture' : 'possible'} 
        />
      )}

      {/* Chess piece */}
      {piece && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          layoutId={`piece-${piece.position.x}-${piece.position.y}`}
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