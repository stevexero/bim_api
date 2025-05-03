import { ReactNode } from 'react';
import { createClient } from '@/app/lib/supabase/server';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Dashboard • BIM',
};

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='w-full max-w-md px-6 py-8 bg-white rounded-lg shadow'>
        {children}
      </div>
    </div>
  );
}
