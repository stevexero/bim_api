import Link from 'next/link';
import SignUpForm from '../components/SignUpForm';

export default function page() {
  return (
    <div
      className='min-h-screen bg-black flex flex-row items-center justify-center text-white'
      role='main'
    >
      <div className='min-h-screen w-full md:w-1/2 lg:w-1/3 flex flex-col items-center justify-between'>
        <h1 className='font-roboto-flex text-gray-300 text-2xl font-bold text-center mt-20 md:mt-28'>
          Create Account
        </h1>
        <SignUpForm />
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
      </div>
      <div
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
      </div>
    </div>
  );
}
