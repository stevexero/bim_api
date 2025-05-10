import { Suspense } from 'react';
import ProjectsOverview from './components/ProjectsOverview';
import Link from 'next/link';
import TeamOverview from './components/TeamOverview';
import BillingOverview from './components/BillingOverview';
export default async function TenantDashboard({
  params,
}: {
  params: Promise<{ tenant: string }>;
}) {
  const { tenant } = await params;

  return (
    <div className='w-full ml-8 md:ml-72 mt-24 md:mt-16'>
      <h1 className='text-lg font-bold'>Dashboard</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mr-8'>
        <Suspense fallback={<div>Loading...</div>}>
          <Link href={`/dashboard/${tenant}/projects`}>
            <ProjectsOverview tenantId={tenant} />
          </Link>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Link href={`/dashboard/${tenant}/team`}>
            <TeamOverview />
          </Link>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Link href={`/dashboard/${tenant}/billing`}>
            <BillingOverview />
          </Link>
        </Suspense>
      </div>
    </div>
  );
}
