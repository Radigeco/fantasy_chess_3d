import { Position } from '../types/chess';

const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const RANKS = ['8', '7', '6', '5', '4', '3', '2', '1'];

export const formatPosition = (pos: Position): string => {
  return `${FILES[pos.x]}${RANKS[pos.y]}`;
};