import { ReactNode } from 'react';
import { createClient } from '@/app/lib/supabase/server';
import { redirect } from 'next/navigation';
import FormFooter from './components/FormFooter';
import AuthIllustration from './components/AuthIllustration';

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className='w-full bg-white'>
      <div
        className='min-h-screen bg-black flex flex-row items-center justify-center text-white'
        role='main'
      >
        <div className='min-h-screen w-full md:w-1/2 lg:w-1/3 flex flex-col items-center justify-between'>
          {children}
          <FormFooter />
        </div>
        <AuthIllustration />
      </div>
    </div>
  );
}
