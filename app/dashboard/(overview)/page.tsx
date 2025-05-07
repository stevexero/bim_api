import { Suspense } from 'react';
import { createTenantAction } from '@/app/lib/actions/tenants';
import { getTenantByUserId } from '@/app/lib/data/tenants';
import { createClient } from '@/app/lib/supabase/server';
import ProjectsOverview from './components/ProjectsOverview';
import Link from 'next/link';
import TeamOverview from './components/TeamOverview';
import BillingOverview from './components/BillingOverview';
export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('No user found');
  }

  const response = await getTenantByUserId(user.id);

  if (!response.success) {
    await createTenantAction(user.id);
  }

  return (
    <div className='w-full ml-8 md:ml-72 mt-24 md:mt-16'>
      <h1 className='text-lg font-bold'>Dashboard</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mr-8'>
        <Suspense fallback={<div>Loading...</div>}>
          <Link href='/dashboard/projects'>
            <ProjectsOverview tenantId={response?.data?.id} />
          </Link>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Link href='/dashboard/team'>
            <TeamOverview />
          </Link>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Link href='/dashboard/billing'>
            <BillingOverview />
          </Link>
        </Suspense>
      </div>
    </div>
  );
}
