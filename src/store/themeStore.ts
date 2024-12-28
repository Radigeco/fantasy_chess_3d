import { create } from 'zustand';
import { ThemeType } from '../types/theme';
import { classicTheme } from '../themes/classic';
import { fantasyTheme } from '../themes/fantasy';
import { darkFantasyTheme } from '../themes/darkFantasy';

interface ThemeStore {
  currentTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  getTheme: () => typeof classicTheme;
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  currentTheme: 'fantasy',
  setTheme: (theme) => set({ currentTheme: theme }),
  getTheme: () => {
    const { currentTheme } = get();
    switch (currentTheme) {
      case 'classic':
        return classicTheme;
      case 'fantasy':
        return fantasyTheme;
      case 'dark-fantasy':
        return darkFantasyTheme;
    }
  }
}));