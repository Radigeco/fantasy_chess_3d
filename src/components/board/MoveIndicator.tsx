import React from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../../store/themeStore';
import { cn } from '../../utils/cn';

interface MoveIndicatorProps {
  type: 'possible' | 'capture';
}

export const MoveIndicator: React.FC<MoveIndicatorProps> = ({ type }) => {
  const { getTheme } = useThemeStore();
  const theme = getTheme();
  const indicatorTheme = theme.indicators[type];

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ 
        scale: [0.8, 1, 0.8],
        opacity: [0.6, 0.8, 0.6],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={cn(
        'absolute inset-0 z-10 pointer-events-none m-6',
        'rounded-full backdrop-blur-sm',
        indicatorTheme.background,
        `border-2 ${indicatorTheme.border}`,
        `shadow-lg ${indicatorTheme.glow}`
      )}
    >
      {/* Inner glow effect */}
      <div className={cn(
        'absolute inset-0 rounded-full blur-md',
        indicatorTheme.background
      )} />
    </motion.div>
  );
};