'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { Locale } from '@/src/types';

const messages = {
  es: {
    title: 'Contenido no encontrado',
    message:
      'No podemos encontrar la página que buscas. Esto puede deberse a que la página fue eliminada o la dirección fue escrita incorrectamente.',
    btn: 'Volver a la página principal',
  },
  en: {
    title: 'Content not found',
    message:
      "We can't find the page you're looking for. This might be because the page was removed or the address was typed incorrectly.",
    btn: 'Return to the home page',
  },
};

const NotFound: React.FC = () => {
  const { lang } = useParams() as { lang: Locale };

  return (
    <div className='pt-[120px] sm:pt-[75px] min-h-screen flex justify-center items-center flex-col text-center'>
      <h1 className='text-2xl font-bold'>{messages[lang].title}</h1>

      <p className='w-4/5 max-w-screen-sm my-5'>{messages[lang].message}</p>

      <Link
        href={`/${lang}`}
        className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-lg font-semibold transition'
      >
        {messages[lang].btn}
      </Link>
    </div>
  );
};

export default NotFound;
