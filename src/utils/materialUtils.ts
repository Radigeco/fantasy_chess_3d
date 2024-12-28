import { BoardTheme } from '../types/theme';
import { PieceColor } from '../types/chess';

export const getMaterialProps = (theme: BoardTheme, pieceColor: PieceColor) => {
  switch (theme.name) {
    case 'Classic Chess':
      return {
        color: pieceColor === 'white' ? '#ffffff' : '#222222',
        metalness: 0.7,
        roughness: 0.2,
      };
    case 'Fantasy Light':
      return {
        color: pieceColor === 'white' ? '#ffd700' : '#4a0404',
        metalness: 0.8,
        roughness: 0.1,
        envMapIntensity: 1.5,
      };
    case 'Dark Fantasy':
      return {
        color: pieceColor === 'white' ? '#c0c0c0' : '#2c0047',
        metalness: 0.9,
        roughness: 0.1,
        envMapIntensity: 2,
      };
    default:
      return {
        color: pieceColor === 'white' ? '#ffffff' : '#222222',
        metalness: 0.7,
        roughness: 0.2,
      };
  }
};