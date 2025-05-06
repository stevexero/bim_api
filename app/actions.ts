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
