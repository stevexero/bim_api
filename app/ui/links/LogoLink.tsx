import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
interface LogoLinkProps {
  className?: string;
  light?: boolean;
  href?: string;
  pathname?: string;
}

export default function LogoLink({
  className = '',
  light = true,
  href = '/',
  pathname = '/',
}: LogoLinkProps) {
  const { tenant } = useParams();

  const content = (
    <Image
      src={light ? '/images/nav_logo_4.png' : '/images/nav_logo_2.png'}
      alt='BIMSystems'
      width={126}
      height={21}
    />
  );

  if (href) {
    return (
      <Link
        href={pathname.startsWith('/dashboard') ? `/dashboard/${tenant}` : href}
        className={`flex items-center font-bold ${
          light ? 'text-gray-300' : 'text-gray-900'
        } focus:outline-none focus:text-gray-400 underline hover:opacity-80 focus:opacity-80 transition-all duration-300 ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      className={`flex items-center font-bold ${
        light ? 'text-gray-300' : 'text-gray-900'
      } ${className}`}
    >
      {content}
    </div>
  );
}
