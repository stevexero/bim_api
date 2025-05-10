import { getProjectBySlug } from '@/app/lib/data/projects';
import { createClient } from '@/app/lib/supabase/server';
import InfoBadge from '@/app/ui/badges/InfoBadge';
import { redirect } from 'next/navigation';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const projectSlug = params.id;

  // Authenticate user
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Get project by slug and user id
  if (!user) {
    redirect('/login');
  }

  const project = await getProjectBySlug(projectSlug);

  return (
    <div className='w-full ml-8 md:ml-72 mt-24 md:mt-16'>
      <div className='flex items-center gap-2'>
        <h1 className='text-lg font-bold'>{project.data.project_name}</h1>
        <InfoBadge text={project.data.status} hasDot={false} />
      </div>
    </div>
  );
}
