'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { createClient } from '@/app/lib/supabase/server';

export type CreateProjectState = { message?: string };

type InsertProjectPayload = {
  tenant_id: string;
  project_name: string;
  project_slug: string;
  created_by: string;
  connection_string?: string;
};

const CreateProjectSchema = z
  .object({
    tenantId: z.string().min(1, { message: 'Tenant ID is required' }),
    projectName: z.string().min(1, { message: 'Project name is required' }),
    createdBy: z.string().min(1, { message: 'User ID is required' }),
    dbOption: z.enum(['hosted', 'external']),
    connectionString: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.dbOption === 'external') {
        return !!data.connectionString;
      }
      return true;
    },
    {
      message: 'Connection string is required when using your own database',
      path: ['connectionString'],
    }
  );

export const createProjectAction = async (
  _prevState: CreateProjectState,
  formData: FormData
) => {
  const raw = {
    tenantId: formData.get('tenantId'),
    projectName: formData.get('projectName'),
    createdBy: formData.get('createdBy'),
    dbOption: formData.get('dbOption'),
    connectionString: formData.get('connectionString'),
  };

  const result = CreateProjectSchema.safeParse(raw);

  if (!result.success) {
    const message = result.error.errors[0].message;
    return { message };
  }

  const data = result.data;
  const slug = data.projectName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  const payload: InsertProjectPayload = {
    tenant_id: data.tenantId,
    project_name: data.projectName,
    project_slug: slug,
    created_by: data.createdBy,
  };

  if (data.dbOption === 'external') {
    payload.connection_string = data.connectionString;
  }

  const supabase = await createClient();

  const { data: project, error } = await supabase
    .from('projects')
    .insert(payload)
    .select('*')
    .single();

  if (error) {
    return { message: error.message };
  }

  redirect(`/dashboard/${data.tenantId}/projects/${project.project_slug}`);
};
