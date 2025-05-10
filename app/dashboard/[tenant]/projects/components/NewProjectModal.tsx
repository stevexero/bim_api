'use client';

import { useActionState, useState } from 'react';
import Modal from '@/app/ui/modals/Modal';
import Button from '@/app/ui/buttons/Button';
import TextBox from '@/app/ui/textInputs/TextBox';
import ErrorMessage from '@/app/ui/messages/ErrorMessage';
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
  const [dbOption, setDbOption] = useState<'hosted' | 'external'>('hosted');

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
          {/* Project Name */}
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

          {/* Database Option */}
          <fieldset className='space-y-2 text-gray-600 text-sm'>
            <legend className='font-semibold'>Database</legend>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input
                type='radio'
                name='dbOption'
                value='hosted'
                checked={dbOption === 'hosted'}
                onChange={() => setDbOption('hosted')}
                className='h-6 w-6 accent-cyan-500'
              />
              <span>Use BIMSystems Hosted DB</span>
            </label>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input
                type='radio'
                name='dbOption'
                value='external'
                checked={dbOption === 'external'}
                onChange={() => setDbOption('external')}
                className='h-6 w-6 accent-cyan-500'
              />
              <span>Use my own database</span>
            </label>
          </fieldset>

          {/* If external, show connection string input */}
          {dbOption === 'external' && (
            <TextBox
              id='connectionString'
              label='Database Connection String'
              name='connectionString'
              placeholder='postgres://user:pass@host:port/dbname'
              required
            />
          )}

          {/* Pass the selected dbOption as hidden too */}
          <input type='hidden' name='dbOption' value={dbOption} />
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
