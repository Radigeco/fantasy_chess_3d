import React from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../../store/themeStore';
import { cn } from '../../utils/cn';

export const ThemeSelector: React.FC = () => {
  const { currentTheme, setTheme } = useThemeStore();

  const themes = [
    { id: 'classic', name: 'Classic Chess', icon: '♟️' },
    { id: 'fantasy', name: 'Fantasy Light', icon: '🏰' },
    { id: 'dark-fantasy', name: 'Dark Fantasy', icon: '💀' }
  ];

  return (
    <div className="absolute top-4 right-4 z-50">
      <motion.select
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        value={currentTheme}
        onChange={(e) => setTheme(e.target.value as any)}
        className={cn(
          'px-4 py-2 rounded-lg',
          'bg-white/10 backdrop-blur-sm',
          'text-white border border-white/20',
          'focus:outline-none focus:ring-2 focus:ring-purple-500',
          'cursor-pointer transition-all duration-200',
          'hover:bg-white/20'
        )}
      >
        {themes.map((theme) => (
          <option
            key={theme.id}
            value={theme.id}
            className="bg-gray-800 text-white"
          >
            {theme.icon} {theme.name}
          </option>
        ))}
      </motion.select>
    </div>
  );
};