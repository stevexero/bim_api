'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { signUpAction, SignUpState } from '@/app/lib/actions/auth';
import TextBox from '@/app/ui/textInputs/TextBox';
import Button from '@/app/ui/buttons/Button';
import ErrorMessage from '@/app/ui/messages/ErrorMessage';

export default function SignUpForm() {
  const initialState: SignUpState = { message: '' };
  const [state, formAction, isPending] = useActionState(
    signUpAction,
    initialState
  );

  return (
    <>
      {state.message && (
        <div className='-mt-20 -mb-24'>
          <ErrorMessage message={state.message} />
        </div>
      )}
      <form
        className='w-full flex flex-col gap-4 mx-auto mt-0 md:-mt-20 p-4 xl:p-12'
        action={formAction}
        aria-label='Sign up form'
      >
        <TextBox
          label='Email'
          name='email'
          id='email'
          type='email'
          required
          light={false}
        />
        <TextBox
          label='Password'
          name='password'
          id='password'
          type='password'
          required
          light={false}
        />
        <TextBox
          label='Verify Password'
          name='verifyPassword'
          id='verifyPassword'
          type='password'
          required
          light={false}
        />
        <Button
          label={isPending ? 'Creating account...' : 'Create Account'}
          type='submit'
          ariaLabel={isPending ? 'Creating account...' : 'Create account'}
          disabled={isPending}
          className='mt-6'
        />
        <div className='inline-block text-right'>
          <Link
            className='text-sm text-gray-400 underline hover:text-gray-300 transition-all duration-300 focus:outline-none focus:text-gray-300'
            href='/login'
            aria-label='Go to login page'
          >
            Already have an account?
          </Link>
        </div>
      </form>
    </>
  );
}
