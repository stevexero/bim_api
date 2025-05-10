'use server';

import { createClient } from '@/app/lib/supabase/server';

// Get all projects by tenant id
export async function getAllProjectsByTenantId(tenantId: string) {
  if (!tenantId) {
    throw new Error('Tenant ID is required');
  }

  const supabase = await createClient();

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('tenant_id', tenantId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

// Get project by slug and user id
export async function getProjectBySlug(slug: string) {
  if (!slug) {
    throw new Error('Slug is required');
  }

  const supabase = await createClient();

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('project_slug', slug)
    .single();

  if (error) {
    return { success: false, message: error.message, data: null };
  }

  return { success: true, message: 'Project fetched successfully', data };
}
