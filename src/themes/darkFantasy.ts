import { BoardTheme } from '../types/theme';

export const darkFantasyTheme: BoardTheme = {
  name: 'Dark Fantasy',
  background: 'from-purple-900/90 to-black/90',
  squares: {
    light: 'from-purple-800/90 to-purple-900/90',
    dark: 'from-gray-900/90 to-black/90',
    border: 'border-purple-600/30',
    selected: 'ring-purple-400/50',
    hover: 'brightness-125'
  },
  pieces: {
    white: {
      king: { symbol: '🌟', name: 'Celestial King', description: 'Guardian of the astral realm' },
      queen: { symbol: '🌙', name: 'Moon Priestess', description: 'Wielder of lunar magic' },
      bishop: { symbol: '🔮', name: 'Crystal Seer', description: 'Oracle of destiny' },
      knight: { symbol: '🐎', name: 'Spectral Steed', description: 'Phantom cavalry' },
      rook: { symbol: '🗿', name: 'Ancient Monolith', description: 'Eternal guardian stone' },
      pawn: { symbol: '✨', name: 'Star Warrior', description: 'Cosmic soldier' }
    },
    black: {
      king: { symbol: '💀', name: 'Necro Lord', description: 'Master of death' },
      queen: { symbol: '🦇', name: 'Night Queen', description: 'Sovereign of darkness' },
      bishop: { symbol: '👻', name: 'Spirit Sage', description: 'Ghost whisperer' },
      knight: { symbol: '🐺', name: 'Dire Wolf', description: 'Shadow hunter' },
      rook: { symbol: '⚰️', name: 'Crypt Keep', description: 'Tomb fortress' },
      pawn: { symbol: '🕷️', name: 'Spider Warrior', description: 'Web weaver' }
    }
  },
  indicators: {
    possible: {
      background: 'bg-purple-400/20',
      border: 'border-purple-400/40',
      glow: 'shadow-purple-400/20'
    },
    capture: {
      background: 'bg-red-600/20',
      border: 'border-red-600/40',
      glow: 'shadow-red-600/20'
    }
  }
};