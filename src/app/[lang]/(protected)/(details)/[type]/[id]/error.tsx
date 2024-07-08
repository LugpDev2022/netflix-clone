'use client';

import { notFound } from 'next/navigation';

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage: React.FC<Props> = ({ error, reset }) => {
  // if (error.message === 'Not Found') notFound();

  return (
    <div className='pt-[120px] sm:pt-[75px] min-h-screen flex justify-center items-center flex-col text-center'>
      <h1 className='text-2xl font-bold mb-5'>Unknown Error</h1>

      <button
        className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-lg font-semibold transition'
        onClick={() => reset()}
      >
        Refresh Page
      </button>
    </div>
  );
};

export default ErrorPage;
