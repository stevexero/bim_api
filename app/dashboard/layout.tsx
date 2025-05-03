import { ReactNode } from 'react';

export const metadata = {
  title: 'Dashboard • BIM',
};

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='w-full max-w-md px-6 py-8 bg-white rounded-lg shadow'>
        {children}
      </div>
    </div>
  );
}
