'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { createClient } from '@/app/lib/supabase/server';

const SignUpSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be 8+ chars' }),
  verifyPassword: z.string().min(8, { message: 'Password must be 8+ chars' }),
});

export type SignUpState = { message?: string };

// Sign Up
export const signUpAction = async (
  _prevState: SignUpState,
  formData: FormData
) => {
  const payload = {
    email: formData.get('email'),
    password: formData.get('password'),
    verifyPassword: formData.get('verifyPassword'),
  };

  const result = SignUpSchema.safeParse(payload);

  if (!result.success) {
    const message = result.error.errors[0].message;
    return { message };
  }

  if (result.data.password !== result.data.verifyPassword) {
    return { message: 'Passwords do not match' };
  }

  const { email, password } = result.data;

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  redirect('/dashboard');
};
