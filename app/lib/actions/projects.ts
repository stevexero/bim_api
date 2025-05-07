'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { createClient } from '@/app/lib/supabase/server';

export type CreateProjectState = { message?: string };

const CreateProjectSchema = z.object({
  tenantId: z.string().min(1, { message: 'Tenant ID is required' }),
  projectName: z.string().min(1, { message: 'Project name is required' }),
  projectSlug: z.string().min(1, { message: 'Project slug is required' }),
  createdBy: z.string().min(1, { message: 'User ID is required' }),
});

export const createProjectAction = async (
  _prevState: CreateProjectState,
  formData: FormData
) => {
  const payload = {
    tenantId: formData.get('tenantId'),
    projectName: formData.get('projectName'),
    projectSlug: formData
      .get('projectName')!
      .toString()
      .toLowerCase()
      .replace(/ /g, '-'),
    createdBy: formData.get('createdBy'),
    // description: formData.get('description'),
  };

  const result = CreateProjectSchema.safeParse(payload);

  if (!result.success) {
    const message = result.error.errors[0].message;
    return { message };
  }

  //   console.log(result.data);

  const supabase = await createClient();

  const { data, error } = await supabase
    .from('projects')
    .insert({
      project_name: result.data.projectName,
      tenant_id: result.data.tenantId,
      project_slug: result.data.projectSlug,
      created_by: result.data.createdBy,
    })
    .select()
    .single();

  if (error) {
    return { message: error.message };
  }

  redirect(`/dashboard/projects/${data.project_slug}`);
};
