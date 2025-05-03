import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getTestPhrases() {
  const { data, error } = await supabase.from('test').select('*');

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}
