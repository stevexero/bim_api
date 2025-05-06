import Link from 'next/link';
import { SiReadthedocs } from 'react-icons/si';
import LogoLink from '@/app/ui/links/LogoLink';
import UserMenu from './components/UserMenu';
import { User } from '@supabase/supabase-js';

interface AuthNavProps {
  pathname: string;
  user: User | null;
}

export default function AuthNav({ pathname, user }: AuthNavProps) {
  return (
    <nav
      className={`absolute top-0 left-0 w-full p-1 ${
        pathname.startsWith('/dashboard')
          ? 'border-b border-gray-400 bg-white'
          : ''
      } flex justify-between items-center`}
    >
      <LogoLink
        light={
          pathname.startsWith('/dashboard') || pathname === '/verify-email'
            ? false
            : true
        }
        pathname={pathname}
      />
      <div className='flex items-center gap-4'>
        <Link
          href='/docs'
          className='bg-gray-100 md:bg-black text-gray-900 md:text-gray-300 text-xs font-bold py-1 px-2 flex items-center gap-1 rounded-lg hover:bg-gray-800 cursor-pointer transition-all duration-300 focus:outline-cyan-500 focus:bg-gray-800'
        >
          <SiReadthedocs />
          &nbsp;Documentation
        </Link>
        {user && <UserMenu user={user} />}
      </div>
    </nav>
  );
}
