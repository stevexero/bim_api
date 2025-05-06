import React from 'react';

type ButtonType = 'submit' | 'button' | 'reset';

interface ButtonProps {
  label?: string;
  type?: ButtonType;
  ariaLabel?: string;
  className?: string;
  disabled?: boolean;
  light?: boolean;
  textSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontWeight?: 'light' | 'normal' | 'bold';
  buttonType?: 'primary' | 'secondary';
  onClick?: () => void;
}

export default function Button({
  label = '',
  type = 'button',
  ariaLabel = '',
  className = '',
  disabled = false,
  light = true,
  textSize = 'md',
  fontWeight = 'normal',
  buttonType = 'primary',
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${
        buttonType === 'secondary'
          ? light
            ? 'bg-transparent text-gray-900 border border-gray-900 hover:bg-gray-800 hover:text-white'
            : 'bg-transparent text-gray-300 border border-gray-300 hover:bg-gray-300 hover:text-white'
          : light
          ? 'bg-cyan-300 text-black hover:bg-cyan-400 focus:outline-cyan-500 focus:bg-cyan-400'
          : 'bg-cyan-500 text-white hover:bg-cyan-600 focus:outline-cyan-600 focus:bg-cyan-500'
      }  font-bold p-2 rounded-lg cursor-pointer transition-all duration-300 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className} text-${textSize} font-${fontWeight}`}
      aria-disabled={disabled}
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
