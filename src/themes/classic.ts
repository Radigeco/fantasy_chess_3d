import { BoardTheme } from '../types/theme';

export const classicTheme: BoardTheme = {
  name: 'Classic Chess',
  background: 'from-gray-200 to-gray-210',
  squares: {
    light: 'bg-gray-100',
    dark: 'bg-gray-700',
    border: 'border-gray-400',
    selected: 'ring-blue-400',
    hover: 'brightness-110'
  },
  pieces: {
    white: {
      king: { symbol: '♔', name: 'King', description: 'White King' },
      queen: { symbol: '♕', name: 'Queen', description: 'White Queen' },
      rook: { symbol: '♖', name: 'Rook', description: 'White Rook' },
      bishop: { symbol: '♗', name: 'Bishop', description: 'White Bishop' },
      knight: { symbol: '♘', name: 'Knight', description: 'White Knight' },
      pawn: { symbol: '♙', name: 'Pawn', description: 'White Pawn' }
    },
    black: {
      king: { symbol: '♚', name: 'King', description: 'Black King' },
      queen: { symbol: '♛', name: 'Queen', description: 'Black Queen' },
      rook: { symbol: '♜', name: 'Rook', description: 'Black Rook' },
      bishop: { symbol: '♝', name: 'Bishop', description: 'Black Bishop' },
      knight: { symbol: '♞', name: 'Knight', description: 'Black Knight' },
      pawn: { symbol: '♟', name: 'Pawn', description: 'Black Pawn' }
    }
  },
  indicators: {
    possible: {
      background: 'bg-blue-400/20',
      border: 'border-blue-400/40',
      glow: 'shadow-blue-400/20'
    },
    capture: {
      background: 'bg-red-400/20',
      border: 'border-red-400/40',
      glow: 'shadow-red-400/20'
    }
  }
};