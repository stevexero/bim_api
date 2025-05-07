import { Suspense } from 'react';
import ProjectsList from './ProjectsList';
import ModalButton from './ModalButton';

interface ProjectsProps {
  tenantId?: string | null;
  projectSlug?: string | null;
  createdBy?: string | null;
}

export default function Projects({
  tenantId,
  projectSlug,
  createdBy,
}: ProjectsProps) {
  return (
    <div className='mt-4'>
      <ModalButton
        tenantId={tenantId ?? ''}
        projectSlug={projectSlug ?? ''}
        createdBy={createdBy ?? ''}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsList tenantId={tenantId ?? ''} />
      </Suspense>
    </div>
  );
}
