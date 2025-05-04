import Link from 'next/link';
import Image from 'next/image';
import { SiReadthedocs } from 'react-icons/si';

export default function AuthNav() {
  return (
    <nav className='absolute top-0 left-0 w-full py-4 px-4 md:px-10 flex justify-between items-center'>
      <Link
        href='/'
        className='flex items-center font-bold text-gray-300 focus:outline-none focus:text-gray-400 underline hover:opacity-80 focus:opacity-80 transition-all duration-300'
      >
        <Image
          src='/images/logo_cyan.png'
          alt='BIMSystems'
          width={16}
          height={16}
        />
        <span className='text-gray-300 ml-1'>BIM</span>
        <span className='text-cyan-300'>Systems</span>
      </Link>
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
