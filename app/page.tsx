import { createClient } from '@/app/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ code?: string }>;
}) {
  const { code } = await searchParams;

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      redirect('/dashboard');
    }
  }

  return (
    <main className='flex justify-center'>
      <div className='max-w-xl my-16 flex flex-col items-center justify-center'>
        <h1 className='font-roboto-flex text-cyan-500 font-bold text-[4rem] text-center leading-16'>
          <span className='text-gray-700'>Your Inventory,</span>
          <br />
          Your Rules.
        </h1>
        <h2 className='mt-4 font-roboto-flex text-gray-500 font-bold text-xl text-center'>
          BIMSystems is a modular, open source supply chain & inventory
          management built for businesses of any size.
        </h2>
      </div>
    </main>
  );
}
