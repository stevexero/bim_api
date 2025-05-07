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
    <div className='w-full min-h-screen flex justify-center'>
      <SideNav />
      <div className='w-full bg-gray-200 flex justify-center'>{children}</div>
    </div>
  );
}
