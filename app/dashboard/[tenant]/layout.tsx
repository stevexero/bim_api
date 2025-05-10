import { ReactNode } from 'react';
import Sidebar from '@/app/ui/navs/Sidebar';

export const metadata = {
  title: 'Dashboard • BIM',
};

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className='w-full min-h-screen flex justify-center'>
      <Sidebar />
      <div className='w-full bg-gray-200 flex justify-center'>{children}</div>
    </div>
  );
}
