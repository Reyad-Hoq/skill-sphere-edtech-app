import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col min-h-[80vh] justify-center items-center space-y-6'>
      <h2 className='text-6xl'>404</h2>
      <h2 className='text-6xl'>This Page is not found</h2>
      <Link href="/" className='btn btn-neutral'>Back to home</Link>
    </div>
  );
};

export default NotFoundPage;