import React from 'react';
import { PieceType } from '../../../types/chess';
import { PieceGeometryProps } from './types';

// Classic pieces
import { KingGeometry } from './classic/KingGeometry';
import { QueenGeometry } from './classic/QueenGeometry';
import { BishopGeometry } from './classic/BishopGeometry';
import { KnightGeometry } from './classic/KnightGeometry';
import { RookGeometry } from './classic/RookGeometry';
import { PawnGeometry } from './classic/PawnGeometry';

// Fantasy pieces
import { FantasyKingGeometry } from './fantasy/KingGeometry';
import { FantasyQueenGeometry } from './fantasy/QueenGeometry';
import { FantasyBishopGeometry } from './fantasy/BishopGeometry';
import { FantasyKnightGeometry } from './fantasy/KnightGeometry';
import { FantasyRookGeometry } from './fantasy/RookGeometry';
import { FantasyPawnGeometry } from './fantasy/PawnGeometry';

// Dark Fantasy pieces
import { DarkFantasyKingGeometry } from './dark-fantasy/KingGeometry';
import { DarkFantasyQueenGeometry } from './dark-fantasy/QueenGeometry';
import { DarkFantasyBishopGeometry } from './dark-fantasy/BishopGeometry';
import { DarkFantasyKnightGeometry } from './dark-fantasy/KnightGeometry';
import { DarkFantasyRookGeometry } from './dark-fantasy/RookGeometry';
import { DarkFantasyPawnGeometry } from './dark-fantasy/PawnGeometry';

interface Props extends PieceGeometryProps {
  type: PieceType;
}

export const PieceGeometrySelector: React.FC<Props> = ({ type, theme, materialProps }) => {
  const getGeometry = () => {
    switch (theme.name) {
      case 'Fantasy Light':
        switch (type) {
          case 'king': return <FantasyKingGeometry materialProps={materialProps} />;
          case 'queen': return <FantasyQueenGeometry materialProps={materialProps} />;
          case 'bishop': return <FantasyBishopGeometry materialProps={materialProps} />;
          case 'knight': return <FantasyKnightGeometry materialProps={materialProps} />;
          case 'rook': return <FantasyRookGeometry materialProps={materialProps} />;
          case 'pawn': return <FantasyPawnGeometry materialProps={materialProps} />;
        }
        break;
      
      case 'Dark Fantasy':
        switch (type) {
          case 'king': return <DarkFantasyKingGeometry materialProps={materialProps} />;
          case 'queen': return <DarkFantasyQueenGeometry materialProps={materialProps} />;
          case 'bishop': return <DarkFantasyBishopGeometry materialProps={materialProps} />;
          case 'knight': return <DarkFantasyKnightGeometry materialProps={materialProps} />;
          case 'rook': return <DarkFantasyRookGeometry materialProps={materialProps} />;
          case 'pawn': return <DarkFantasyPawnGeometry materialProps={materialProps} />;
        }
        break;
      
      default:
        switch (type) {
          case 'king': return <KingGeometry materialProps={materialProps} />;
          case 'queen': return <QueenGeometry materialProps={materialProps} />;
          case 'bishop': return <BishopGeometry materialProps={materialProps} />;
          case 'knight': return <KnightGeometry materialProps={materialProps} />;
          case 'rook': return <RookGeometry materialProps={materialProps} />;
          case 'pawn': return <PawnGeometry materialProps={materialProps} />;
        }
    }
  };

  return getGeometry();
};