import { Suspense } from 'react';
import Projects from '@/app/dashboard/[tenant]/projects/components/Projects';
import { createClient } from '@/app/lib/supabase/server';
import { getTenantByUserId } from '@/app/lib/data/tenants';

export default async function page() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('No user found');
  }

  const response = await getTenantByUserId(user.id);

  return (
    <div className='w-full ml-8 md:ml-72 mt-24 md:mt-16'>
      <h1 className='text-lg font-bold'>Projects</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Projects tenantId={response?.data?.id} createdBy={user?.id} />
      </Suspense>
    </div>
  );
}
