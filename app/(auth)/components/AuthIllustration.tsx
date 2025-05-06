'use client';

import { usePathname } from 'next/navigation';

export default function AuthIllustration() {
  const pathname = usePathname();

  if (pathname === '/verify-email') {
    return null;
  }

  return (
    <aside
      className='hidden md:block w-1/2 md:w-2/3 h-screen bg-white'
      style={{
        backgroundImage: "url('/images/signupimage.png')",
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      role='img'
      aria-label='Product illustration showing inventory management interface'
    >
      <div className='mt-28 px-10'>
        <h2 className='font-roboto-flex text-black font-bold text-2xl text-center'>
          Easy Assets & Inventory Management for Small Businesses, DIYers,
          Developers with clients
        </h2>
        <p className='font-roboto-flex text-black text-lg text-center'>
          ...or Whatever
        </p>
      </div>
    </aside>
  );
}
