import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function createTestPhrases({ phrase }: { phrase: string }) {
  const { data, error } = await supabase
    .from('test')
    .insert([{ phrase }])
    .select('*')
    .single();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}

// Delete a phrase
export async function deleteTestPhrases({ id }: { id: number }) {
  const { data, error } = await supabase.from('test').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}

// Update a phrase
export async function updateTestPhrases({
  id,
  phrase,
}: {
  id: number;
  phrase: string;
}) {
  const { data, error } = await supabase
    .from('test')
    .update({ phrase })
    .eq('id', id);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}

// Create a new API key Action
function genApiKey() {
  // 32 bytes → 64 hex chars
  return crypto.randomBytes(32).toString('hex');
}

function hashKey(key: string) {
  return crypto.createHash('sha256').update(key).digest('hex');
}

export async function createApiKey({
  name,
  tenant_id,
}: {
  name: string;
  tenant_id: string;
}) {
  const rawKey = genApiKey();
  const hashed = hashKey(rawKey);

  const { data, error } = await supabase
    .from('api_keys')
    .insert({ name, tenant_id, hashed_key: hashed });

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}

// Verify API key
export async function verifyApiKey(rawKey: string): Promise<string | null> {
  const hashed = hashKey(rawKey);
  const { data, error } = await supabase
    .from('api_keys')
    .select('id, tenant_id, revoked')
    .eq('hashed_key', hashed)
    .single();

  if (error || !data || data.revoked) return null;
  const { error: updateError } = await supabase
    .from('api_keys')
    .update({ last_used_at: new Date().toISOString() })
    .eq('id', data.id);

  if (updateError) {
    console.error(updateError);
    throw new Error(updateError.message);
  }

  return data.tenant_id;
}
