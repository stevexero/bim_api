'use client';

import Link from 'next/link';
import { User } from '@supabase/supabase-js';
import { usePathname } from 'next/navigation';
import AuthNav from './AuthNav';
import LogoLink from '../links/LogoLink';
import ButtonLink from '../links/ButtonLink';
interface NavbarProps {
  user: User | null;
}

export default function Navbar({ user }: NavbarProps) {
  const pathname = usePathname();

  if (pathname === '/signup') {
    return <AuthNav />;
  }

  return (
    <nav className='w-full py-4 px-4 md:px-10 flex justify-between items-center bg-white border-b border-gray-200'>
      <LogoLink light={false} />
      <div className='flex items-center gap-4'>
        {user ? (
          <Link href='/dashboard'>Dashboard</Link>
        ) : (
          <>
            <ButtonLink
              href='/login'
              label='Login'
              textSize='xs'
              buttonType='secondary'
            />
            <ButtonLink
              href='/signup'
              label='Get Started'
              light={false}
              textSize='xs'
            />
          </>
        )}
      </div>
    </nav>
  );
}
