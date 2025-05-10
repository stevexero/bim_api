'use client';

import { useState } from 'react';
import Button from '@/app/ui/buttons/Button';
import NewProjectModal from './NewProjectModal';

export default function ModalButton({
  tenantId,
  projectSlug,
  createdBy,
}: {
  tenantId: string;
  projectSlug: string;
  createdBy: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Button
        label='New project'
        ariaLabel='New project'
        textSize='sm'
        onClick={() => setIsModalOpen(true)}
      />
      <NewProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tenantId={tenantId ?? ''}
        projectSlug={projectSlug ?? ''}
        createdBy={createdBy ?? ''}
      />
    </div>
  );
}
