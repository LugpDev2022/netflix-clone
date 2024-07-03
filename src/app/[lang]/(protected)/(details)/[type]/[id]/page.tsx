import { FaPlay } from 'react-icons/fa6';

import RelatedMovies from '@/src/app/[lang]/(protected)/(details)/[type]/[id]/components/RelatedMovies';
import AdditionalInfo from '@/src/app/[lang]/(protected)/(details)/[type]/[id]/components/AdditionalInfo';
import { searchById } from '@/src/app/[lang]/(protected)/(details)/lib/searchById';
import { getDictionary } from '@/src/app/[lang]/dictionaries';
import { Locale } from '@/src/types';

interface Props {
  params: {
    lang: Locale;
    id: string;
    type: 'movie' | 'tv';
  };
}

const DetailsPage: React.FC<Props> = async ({ params: { id, lang, type } }) => {
  const dict = await getDictionary(lang);
  const [err, details] = await searchById(type, parseInt(id), lang);

  //TODO: Improve error handling
  if (err) return <></>;
  if (!details) return <></>;

  const releaseYear = new Date(details.release_date).getFullYear();

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

          <AdditionalInfo
            type={type}
            releaseYear={releaseYear}
            runtime={details.runtime}
            seasons={details.number_of_seasons}
          />

          <button className='flex gap-2 items-center bg-red-600 hover:bg-red-700 transition py-2.5 px-5 rounded-sm w-full justify-center'>
            <FaPlay size={18} />
            <span className='text-lg font-semibold'>
              {dict.app.details.watchNow}
            </span>
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

      <section className='pt-2.5 pb-5'>
        <h2 className='px-5 md:px-10 text-lg font-semibold mb-2'>
          {dict.app.details.recommendations}
        </h2>
        <RelatedMovies id={parseInt(id)} lang={lang} type={type} />
      </section>
    </div>
  );
};

export default DetailsPage;
