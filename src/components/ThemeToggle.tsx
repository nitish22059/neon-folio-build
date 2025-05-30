
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-cyber-gray/30 border border-neon-purple/30 hover:border-neon-purple/60 transition-all duration-300 group"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-6 h-6">
        <Sun
          className={`absolute inset-0 w-6 h-6 text-yellow-500 transition-all duration-300 ${
            theme === 'dark' 
              ? 'opacity-0 rotate-90 scale-0' 
              : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        <Moon
          className={`absolute inset-0 w-6 h-6 text-blue-400 transition-all duration-300 ${
            theme === 'light' 
              ? 'opacity-0 -rotate-90 scale-0' 
              : 'opacity-100 rotate-0 scale-100'
          }`}
        />
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-purple/20 to-cyber-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </button>
  );
};

export default ThemeToggle;
