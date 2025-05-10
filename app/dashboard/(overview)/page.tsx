import { createTenantAction } from '@/app/lib/actions/tenants';
import { getTenantByUserId } from '@/app/lib/data/tenants';
import { createClient } from '@/app/lib/supabase/server';
import PageLoading from './components/PageLoading';
import { redirect } from 'next/navigation';

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
    const res = await createTenantAction(user.id);
    if (res.success) {
      redirect(`/dashboard/${res.data.id}`);
    } else {
      redirect('/');
    }
  } else {
    redirect(`/dashboard/${response.data.id}`);
  }

  return (
    <div className='w-full h-full'>
      <PageLoading />
    </div>
  );
}
