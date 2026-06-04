import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export function AnimatedButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
}: AnimatedButtonProps) {
  const baseClasses =
    'px-6 py-3 rounded-lg font-semibold transition-all duration-200 relative overflow-hidden';

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-yellow-400 to-blue-500 text-dark-900 hover:shadow-lg hover:shadow-yellow-400/50 font-bold',
    secondary:
      'bg-gradient-to-r from-blue-500 to-cyan-400 text-dark-900 hover:shadow-lg hover:shadow-blue-500/50 font-bold',
    outline:
      'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 hover:shadow-lg hover:shadow-yellow-400/30',
  };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.button>
  );
}
