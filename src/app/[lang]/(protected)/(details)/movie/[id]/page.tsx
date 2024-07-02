import { FaPlay } from 'react-icons/fa6';

import { searchById } from '@/src/app/[lang]/(protected)/(details)/lib/searchById';
import { Locale } from '@/src/types';

interface Props {
  params: {
    lang: Locale;
    id: string;
  };
}

const MovieDetailsPage: React.FC<Props> = async ({ params: { id, lang } }) => {
  const [err, details] = await searchById('movie', parseInt(id), lang);

  //TODO: Improve error handling
  if (err) return <></>;

  console.log(details);

  return (
    <div>
      <section className='h-screen relative flex justify-start items-end'>
        <div className='w-full h-full absolute top-0 left-0'>
          <div className='bg-gradient-to-b from-black/80 via-black/0 via-40% to-black w-full h-full absolute top-0 left-0'></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://image.tmdb.org/t/p/original${details?.backdrop_path}`}
            alt='Poster'
            className='w-full h-full object-cover'
          />
        </div>

        <div className='z-10 relative w-full p-5 sm:max-w-sm md:p-10'>
          <h1 className='text-3xl font-bold text-pretty'>{details?.title}</h1>

          <div className='text-white/80 my-2.5 flex flex-row gap-5'>
            <span>1h 44min</span>

            <time dateTime='2023'>2023</time>
          </div>

          <button className='flex gap-2 items-center bg-red-600 hover:bg-red-700 transition py-2.5 px-5 rounded-sm w-full justify-center'>
            <FaPlay size={18} />
            <span className='text-lg font-semibold'>Watch Now</span>
          </button>
        </div>
      </section>

      <section className='px-5 py-2.5 md:px-10'>
        <p className='text-white/80'>{details?.overview}</p>

        {/* Categories */}
        <ul className='mt-3 text-sm flex flex-row flex-wrap gap-2 font-semibold'>
          {details?.genres.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </section>

      <section className='px-5 py-2.5 md:px-10'>
        <h2 className='text-lg font-semibold'>You may like</h2>
        {/* TODO: Show related movies */}
      </section>
    </div>
  );
};

export default MovieDetailsPage;
