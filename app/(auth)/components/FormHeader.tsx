import React from 'react';

export default function FormHeader({ title }: { title: string }) {
  return (
    <h1 className='font-roboto-flex text-gray-300 text-2xl font-bold text-center mt-20 md:mt-28'>
      {title}
    </h1>
  );
}
