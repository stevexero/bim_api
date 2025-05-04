import { ReactNode } from 'react';
import { createClient } from '@/app/lib/supabase/server';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Sign In • BIM',
};

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

  return <div className='w-full bg-white'>{children}</div>;
}
