'use client';

import { ClipLoader } from 'react-spinners';

export default function PageLoading() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <ClipLoader
        color='#00bfe0'
        loading={true}
        size={150}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
      <h1 className='text-2xl font-bold mt-8'>Setting up your account...</h1>
      <p className='text-sm text-gray-500'>This may take a few seconds</p>
    </div>
  );
}
