import { ReactNode } from 'react';
import SideNav from '../ui/navs/SideNav';

export const metadata = {
  title: 'Dashboard • BIM',
};

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-gray-50'>
      <SideNav />
      <div className='w-full max-w-md px-6 py-8 bg-white rounded-lg shadow'>
        {children}
      </div>
    </div>
  );
}
