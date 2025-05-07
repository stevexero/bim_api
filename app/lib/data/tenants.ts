import { createClient } from '@/app/lib/supabase/server';

// Get tenant by user id
export async function getTenantByUserId(userId: string) {
  if (!userId) {
    throw new Error('User ID is required');
  }

  const supabase = await createClient();

  const { data, error } = await supabase
    .from('tenants')
    .select('*')
    .eq('owner_id', userId)
    .single();

  if (!data) {
    return { success: false, message: 'No tenant found', data: null };
  }

  if (error) {
    return { success: false, message: error.message, data: null };
  }

  return { success: true, message: 'Tenant found', data: data };
}
