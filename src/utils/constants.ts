export const PIECE_VALUES = {
  pawn: 10,
  knight: 30,
  bishop: 30,
  rook: 50,
  queen: 90,
  king: 900
};

export const BOARD_SIZE = 8;
export const MOVE_ANIMATION_DURATION = 0.8;
export const AI_MOVE_DELAY = 1000;

export const THEME = {
  colors: {
    board: {
      light: 'from-amber-100/90 to-amber-200/90',
      dark: 'from-amber-800/90 to-amber-900/90',
      border: 'border-amber-700/50'
    },
    pieces: {
      white: {
        glow: 'bg-blue-400/30',
        indicator: 'bg-blue-400/20'
      },
      black: {
        glow: 'bg-purple-600/30',
        indicator: 'bg-purple-600/20'
      }
    },
    moves: {
      possible: {
        border: 'border-blue-400/40',
        glow: 'shadow-blue-400/20'
      },
      capture: {
        border: 'border-red-400/40',
        glow: 'shadow-red-400/20'
      }
    }
  },
  animations: {
    piece: {
      hover: {
        scale: 1.1,
        duration: 0.2
      },
      selected: {
        scale: 1.2,
        float: {
          duration: 0.5,
          height: -10
        }
      }
    }
  }
};