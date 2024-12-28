export type PieceType = 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
export type PieceColor = 'white' | 'black';
export type GameMode = 'ai' | 'human';

export interface ChessPiece {
  type: PieceType;
  color: PieceColor;
  position: Position;
  imageUrl: string;
}

export interface Position {
  x: number;
  y: number;
}

export interface Move {
  piece: ChessPiece;
  from: Position;
  to: Position;
  capturedPiece: ChessPiece | null;
}

export interface GameState {
  board: (ChessPiece | null)[][];
  selectedPiece: ChessPiece | null;
  currentTurn: PieceColor;
  playerColor: PieceColor;
  gameMode: GameMode;
  gameStarted: boolean;
  moveHistory: Move[];
  gameOver: boolean;
  winner: PieceColor | null;
}