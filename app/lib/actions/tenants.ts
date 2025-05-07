'use server';

import { createClient } from '@/app/lib/supabase/server';

// Create a new tenant
export async function createTenantAction(userId: string) {
  if (!userId) {
    return { message: 'User ID is required' };
  }

  const supabase = await createClient();

  const { data, error } = await supabase
    .from('tenants')
    .insert({ owner_id: userId })
    .select('*')
    .single();

  if (!data) {
    return { success: false, message: 'No tenant created', data: null };
  }

  if (error) {
    return { success: false, message: error.message, data: null };
  }

  return { success: true, message: 'Tenant created successfully', data };
}
