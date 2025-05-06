'use client';

import { User } from '@supabase/supabase-js';
import { usePathname } from 'next/navigation';
import AuthNav from './AuthNav';
import LogoLink from '../links/LogoLink';
import ButtonLink from '../links/ButtonLink';
import Button from '../buttons/Button';
import { logoutAction } from '@/app/lib/actions/auth';

interface NavbarProps {
  user: User | null;
}

export default function Navbar({ user }: NavbarProps) {
  const pathname = usePathname();

  const handleLogout = async () => {
    await logoutAction();
  };

  if (
    pathname === '/signup' ||
    pathname === '/login' ||
    pathname === '/verify-email' ||
    pathname.startsWith('/dashboard')
  ) {
    return <AuthNav pathname={pathname} user={user} />;
  }

  return (
    <nav className='w-full py-4 px-4 md:px-10 flex justify-between items-center bg-white border-b border-gray-400'>
      <LogoLink light={false} pathname={pathname} />
      <div className='flex items-center gap-4'>
        {user ? (
          <Button
            onClick={handleLogout}
            label='Logout'
            textSize='xs'
            buttonType='secondary'
          />
        ) : (
          <ButtonLink
            href='/login'
            label='Login'
            textSize='xs'
            buttonType='secondary'
          />
        )}
        <ButtonLink
          href={user ? '/dashboard' : '/signup'}
          label={user ? 'Dashboard' : 'Get Started'}
          light={false}
          textSize='xs'
        />
      </div>
    </nav>
  );
}
