import { Suspense } from 'react';
import { getAllProjectsByTenantId } from '@/app/lib/data/projects';
import ModalButton from './ModalButton';
import Link from 'next/dist/client/link';
import ProjectOverview from './ProjectOverview';

interface ProjectsProps {
  tenantId?: string | null;
  projectSlug?: string | null;
  createdBy?: string | null;
}

export default async function Projects({
  tenantId,
  projectSlug,
  createdBy,
}: ProjectsProps) {
  const projects = await getAllProjectsByTenantId(tenantId ?? '');

  return (
    <div className='mt-4'>
      <ModalButton
        tenantId={tenantId ?? ''}
        projectSlug={projectSlug ?? ''}
        createdBy={createdBy ?? ''}
      />
      <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 mr-8'>
        {projects.map((project) => (
          <Suspense fallback={<div>Loading...</div>} key={project.id}>
            <Link href={`/dashboard/projects/${project.project_slug}`}>
              <ProjectOverview projectName={project.project_name} />
            </Link>
          </Suspense>
        ))}
      </div>
    </div>
  );
}
