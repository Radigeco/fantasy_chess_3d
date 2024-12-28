import React from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { MoveItem } from './MoveItem';
import { Move } from '../../types/chess';

export const MoveHistory: React.FC = () => {
  const { moveHistory } = useGameStore();

  const groupMovesByTurn = (moves: Move[]) => {
    const grouped: { white?: Move; black?: Move }[] = [];
    let currentTurn: { white?: Move; black?: Move } = {};

    moves.forEach(move => {
      if (move.piece.color === 'white') {
        currentTurn.white = move;
      } else {
        currentTurn.black = move;
        grouped.push(currentTurn);
        currentTurn = {};
      }
    });

    if (currentTurn.white) {
      grouped.push(currentTurn);
    }

    return grouped;
  };

  const groupedMoves = groupMovesByTurn(moveHistory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-8 w-full max-w-3xl transform-gpu perspective-1000 relative"
    >
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse" style={{ filter: 'blur(20px)', zIndex: -1 }} />
      
      <motion.h2 
        className="text-2xl font-bold text-white mb-6 flex items-center"
        whileHover={{ scale: 1.05 }}
      >
        <motion.span 
          className="mr-2 text-3xl"
          animate={{ 
            rotateY: [0, 360],
            transition: { duration: 2, repeat: Infinity, ease: "linear" }
          }}
        >
          ♟
        </motion.span>
        Move History
      </motion.h2>
      
      <div className="space-y-2 relative">
        {groupedMoves.map((turn, index) => (
          <div key={index} className="grid grid-cols-2 gap-4">
            {turn.white && (
              <MoveItem
                move={turn.white}
                turnNumber={index + 1}
                className="bg-white/5 hover:bg-white/10"
              />
            )}
            {turn.black && (
              <MoveItem
                move={turn.black}
                turnNumber={index + 1}
                className="bg-black/5 hover:bg-black/10"
              />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};