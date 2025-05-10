import { getProjectBySlug } from '@/app/lib/data/projects';

export default async function page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const projectSlug = params.id;

  const updatedProjectSlug = projectSlug.replace('/keys', '');

  const project = await getProjectBySlug(updatedProjectSlug);
  return (
    <div className='w-full ml-8 md:ml-72 mt-24 md:mt-16'>
      <h1 className='text-lg font-bold'>
        API Keys: {project.data.project_name}
      </h1>
    </div>
  );
}
