'use client';

import { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import Button from '../buttons/Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50'>
      <div
        ref={modalRef}
        className='bg-white rounded p-4 w-full max-w-md mx-4'
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-title'
      >
        <div className='flex justify-between items-center mb-4'>
          <h2 id='modal-title' className='font-semibold'>
            {title}
          </h2>
          <Button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700 focus:outline-none'
            ariaLabel='Close modal'
            label={<FaTimes className='text-xs' />}
            buttonType='secondary'
          />
        </div>
        {children}
      </div>
    </div>
  );
}
