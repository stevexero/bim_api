import React from 'react';

interface InfoBadgeProps {
  text: string;
  hasDot?: boolean;
}

export default function InfoBadge({ text, hasDot = true }: InfoBadgeProps) {
  return (
    <div className='flex items-center gap-1'>
      {hasDot && (
        <div
          className={`w-2 h-2 bg-gray-800 rounded-full ${
            text === 'active' ? 'bg-green-500' : 'bg-red-800'
          }`}
        />
      )}
      <div
        className={`bg-gray-100 text-gray-800 text-xs px-2 pb-[1px] rounded-full ${
          text === 'active'
            ? 'border border-green-800 text-green-800'
            : 'bg-red-100 border border-red-800 text-red-800'
        }`}
      >
        {text}
      </div>
    </div>
  );
}
