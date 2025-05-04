import Link from 'next/link';
import { SiReadthedocs } from 'react-icons/si';
import LogoLink from '@/app/ui/links/LogoLink';

export default function AuthNav() {
  return (
    <nav className='absolute top-0 left-0 w-full py-4 px-4 md:px-10 flex justify-between items-center'>
      <LogoLink />
      <Link
        href='/docs'
        className='mt-1 bg-gray-100 md:bg-black text-gray-900 md:text-gray-300 text-xs font-bold py-1 px-2 flex items-center gap-1 rounded-lg hover:bg-gray-800 cursor-pointer transition-all duration-300 focus:outline-cyan-500 focus:bg-gray-800'
      >
        <SiReadthedocs />
        &nbsp;Documentation
      </Link>
    </nav>
  );
}
