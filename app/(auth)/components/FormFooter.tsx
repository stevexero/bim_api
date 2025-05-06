'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FormFooter() {
  const pathname = usePathname();

  if (pathname === '/verify-email') {
    return null;
  }

  return (
    <div className='px-4 sm:px-12 mb-4 md:mb-12'>
      <p className='text-xs text-center text-gray-400 mb-1'>
        By continuing, you agree to BIMSystem&apos;s{' '}
        <Link
          className='text-gray-300 underline hover:text-gray-300 transition-all duration-300 focus:outline-none focus:text-gray-500'
          href='/terms'
        >
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link
          className='text-gray-300 underline hover:text-gray-300 transition-all duration-300 focus:outline-none focus:text-gray-500'
          href='/privacy'
        >
          Privacy Policy
        </Link>
      </p>
      <p className='text-xs text-center text-gray-400'>
        BIMSystems is a subsidiary of{' '}
        <Link
          className='text-gray-300 underline hover:text-gray-300 transition-all duration-300 focus:outline-none focus:text-gray-500'
          href='https://box-valet.com'
          target='_blank'
        >
          BoxValet
        </Link>
      </p>
    </div>
  );
}
