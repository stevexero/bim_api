'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { createClient } from '@/app/lib/supabase/server';
import { cookies } from 'next/headers';

const SignUpSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be 8+ chars' }),
  verifyPassword: z.string().min(8, { message: 'Password must be 8+ chars' }),
});

const LoginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be 8+ chars' }),
});

export type SignUpState = { message?: string };
export type LoginState = { message?: string };

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

  // Store email in cookie before redirecting
  const cookieStore = await cookies();
  cookieStore.set('bimsystems_signup_email', email, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60, // 1 hour
  });

  redirect('/verify-email');
};

// Login
export const loginAction = async (
  _prevState: LoginState,
  formData: FormData
) => {
  const payload = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const result = LoginSchema.safeParse(payload);

  if (!result.success) {
    const message = result.error.errors[0].message;
    return { message };
  }

  const { email, password } = result.data;

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  redirect('/dashboard');
};

// Logout
export const logoutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();

  const cookieStore = await cookies();
  cookieStore.delete('bimsystems_signup_email');

  redirect('/');
};

// Resend Verification Email
export const resendVerificationEmailAction = async (email: string) => {
  const supabase = await createClient();
  const { error } = await supabase.auth.resend({
    type: 'signup',
    email: email,
  });

  if (error) {
    return { error: error.message };
  }

  return { message: 'Verification email sent' };
};
