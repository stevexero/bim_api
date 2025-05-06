import Link from 'next/link';
import React from 'react';

interface ButtonLinkProps {
  href?: string;
  className?: string;
  label?: string;
  disabled?: boolean;
  light?: boolean;
  textSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontWeight?: 'light' | 'normal' | 'bold';
  buttonType?: 'primary' | 'secondary';
}

export default function ButtonLink({
  href = '',
  className = '',
  label = '',
  disabled = false,
  light = true,
  textSize = 'md',
  fontWeight = 'normal',
  buttonType = 'primary',
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${
        buttonType === 'secondary'
          ? light
            ? 'bg-transparent text-gray-900 border border-gray-900 hover:bg-gray-800 hover:text-white focus:outline-cyan-500 focus:bg-cyan-400'
            : 'bg-transparent text-gray-300 border border-gray-300 hover:bg-gray-300 hover:text-white focus:outline-cyan-600 focus:bg-cyan-500'
          : light
          ? 'bg-cyan-300 text-black border border-cyan-300 hover:bg-cyan-400 focus:outline-cyan-500 focus:bg-cyan-400'
          : 'bg-cyan-500 text-white border border-cyan-500 hover:bg-cyan-600 focus:outline-cyan-600 focus:bg-cyan-500'
      }  font-bold p-2 rounded-lg cursor-pointer transition-all duration-300 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className} text-${textSize} font-${fontWeight}`}
      aria-disabled={disabled}
    >
      {label}
    </Link>
  );
}
