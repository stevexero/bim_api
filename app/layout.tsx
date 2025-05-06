import type { Metadata } from 'next';
import { createClient } from './lib/supabase/server';
import Navbar from './ui/navs/Navbar';
import Footer from './ui/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'BIMSystems',
  description: 'BoxValet Inventory Management System',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang='en'>
      <body className='min-h-screen flex flex-col selection:bg-cyan-500 selection:text-white'>
        {<Navbar user={user} />}
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
