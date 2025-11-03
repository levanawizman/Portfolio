import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  className?: string;
}

export function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '' 
}: ButtonProps) {
  const base = 'px-4 py-2 rounded-xl font-medium transition-all duration-200';
  const variants = {
    primary: 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg',
    ghost: 'hover:bg-white/5 text-slate-300',
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

