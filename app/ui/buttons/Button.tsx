import React from 'react';

type ButtonType = 'submit' | 'button' | 'reset';

interface ButtonProps {
  label?: string;
  type?: ButtonType;
  ariaLabel?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  label = '',
  type = 'button',
  ariaLabel = '',
  className = '',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`bg-cyan-300 text-black font-bold p-2 rounded-lg mt-6 hover:bg-cyan-400 cursor-pointer transition-all duration-300 focus:outline-cyan-500 focus:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
