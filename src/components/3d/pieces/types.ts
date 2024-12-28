import { BoardTheme } from '../../../types/theme';

export interface GeometryProps {
  materialProps: {
    color: string;
    metalness: number;
    roughness: number;
    envMapIntensity?: number;
  };
}

export interface PieceGeometryProps extends GeometryProps {
  theme: BoardTheme;
}