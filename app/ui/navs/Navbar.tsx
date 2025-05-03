'use client';

import Link from 'next/link';
import { User } from '@supabase/supabase-js';
// import { usePathname } from 'next/navigation';

interface NavbarProps {
  user: User | null;
}

export default function Navbar({ user }: NavbarProps) {
  //   const pathname = usePathname();

  return (
    <nav className='bg-white border-b border-gray-200'>
      <div className='flex justify-between'>
        <Link href='/'>
          <span className='font-semibold text-gray-800'>BIMSystems</span>
        </Link>
        <div className='flex items-center gap-4'>
          {user ? (
            <Link href='/dashboard'>Dashboard</Link>
          ) : (
            <>
              <Link href='/login'>Login</Link>
              <Link href='/signup'>Get Started</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
