import { BoardTheme } from '../types/theme';

export const fantasyTheme: BoardTheme = {
  name: 'Fantasy Light',
  background: 'from-amber-900/90 to-amber-800/90',
  squares: {
    light: 'from-amber-100/90 to-amber-200/90',
    dark: 'from-amber-800/90 to-amber-900/90',
    border: 'border-amber-700/50',
    selected: 'ring-blue-400/50',
    hover: 'brightness-110'
  },
  pieces: {
    white: {
      king: { symbol: '👑', name: 'High King', description: 'The immortal ruler of the light realm' },
      queen: { symbol: '🧙‍♀️', name: 'Archmage', description: 'Master of the arcane arts' },
      bishop: { symbol: '🧝', name: 'Elven Sage', description: 'Ancient keeper of wisdom' },
      knight: { symbol: '🦄', name: 'Unicorn Rider', description: 'Swift and noble warrior' },
      rook: { symbol: '🏰', name: 'Crystal Tower', description: 'Magical fortress of power' },
      pawn: { symbol: '⚔️', name: 'Light Warrior', description: 'Valiant soldier of the realm' }
    },
    black: {
      king: { symbol: '😈', name: 'Dark Lord', description: 'Supreme ruler of shadow' },
      queen: { symbol: '🧙', name: 'Shadow Mage', description: 'Wielder of dark magic' },
      bishop: { symbol: '🧛', name: 'Vampire Lord', description: 'Ancient being of darkness' },
      knight: { symbol: '🐉', name: 'Dragon Rider', description: 'Fearsome aerial warrior' },
      rook: { symbol: '🗼', name: 'Dark Tower', description: 'Fortress of shadow' },
      pawn: { symbol: '🗡️', name: 'Shadow Knight', description: 'Warrior of darkness' }
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