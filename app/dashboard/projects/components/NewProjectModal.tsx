'use client';

import { useActionState } from 'react';
import Modal from '../../../ui/modals/Modal';
import Button from '../../../ui/buttons/Button';
import TextBox from '../../../ui/textInputs/TextBox';
import ErrorMessage from '../../../ui/messages/ErrorMessage';
import {
  createProjectAction,
  CreateProjectState,
} from '@/app/lib/actions/projects';

interface NewProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  tenantId: string | null;
  projectSlug: string | null;
  createdBy: string | null;
}

export default function NewProjectModal({
  isOpen,
  onClose,
  tenantId = '',
  projectSlug = '',
  createdBy = '',
}: NewProjectModalProps) {
  const initialState: CreateProjectState = { message: '' };
  const [state, formAction, isPending] = useActionState(
    createProjectAction,
    initialState
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title='New Project'>
      {state.message && (
        <div className=''>
          <ErrorMessage message={state.message} />
        </div>
      )}
      {tenantId === '' && (
        <div className=''>
          <ErrorMessage message='Tenant ID is required' />
        </div>
      )}
      <form action={formAction} className='space-y-4'>
        <input type='hidden' name='tenantId' value={tenantId ?? ''} />
        <input type='hidden' name='projectSlug' value={projectSlug ?? ''} />
        <input type='hidden' name='createdBy' value={createdBy ?? ''} />
        <div className='flex flex-col gap-2'>
          <TextBox
            id='projectName'
            label='Project Name'
            name='projectName'
            placeholder={
              tenantId === '' ? 'Error with tenant ID' : 'Enter project name'
            }
            disabled={tenantId === ''}
            required
          />
        </div>
        <div className='flex justify-end gap-3'>
          <Button
            label='Cancel'
            onClick={onClose}
            textSize='sm'
            buttonType='secondary'
          />
          <Button
            label='Create Project'
            type='submit'
            textSize='sm'
            disabled={isPending || tenantId === ''}
          />
        </div>
      </form>
    </Modal>
  );
}
