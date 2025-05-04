import Link from 'next/link';
import Image from 'next/image';

interface LogoLinkProps {
  className?: string;
  light?: boolean;
}

export default function LogoLink({
  className = '',
  light = true,
}: LogoLinkProps) {
  return (
    <Link
      href='/'
      className={`flex items-center font-bold ${
        light ? 'text-gray-300' : 'text-gray-900'
      } focus:outline-none focus:text-gray-400 underline hover:opacity-80 focus:opacity-80 transition-all duration-300 ${className}`}
    >
      <Image
        src={light ? '/images/logo_cyan.png' : '/images/logo_cyan_dark.png'}
        alt='BIMSystems'
        width={16}
        height={16}
      />
      <span className={`ml-1 ${light ? 'text-gray-300' : 'text-gray-900'}`}>
        BIM
      </span>
      <span className={`${light ? 'text-gray-300' : 'text-cyan-500'}`}>
        Systems
      </span>
    </Link>
  );
}
