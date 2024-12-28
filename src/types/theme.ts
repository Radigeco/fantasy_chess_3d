export type ThemeType = 'classic' | 'fantasy' | 'dark-fantasy';

export interface PieceTheme {
  symbol: string;
  name: string;
  description: string;
}

export interface BoardTheme {
  name: string;
  background: string;
  squares: {
    light: string;
    dark: string;
    border: string;
    selected: string;
    hover: string;
  };
  pieces: {
    white: Record<string, PieceTheme>;
    black: Record<string, PieceTheme>;
  };
  indicators: {
    possible: {
      background: string;
      border: string;
      glow: string;
    };
    capture: {
      background: string;
      border: string;
      glow: string;
    };
  };
}