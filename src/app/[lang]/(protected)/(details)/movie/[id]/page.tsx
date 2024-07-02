import { searchById } from '@/src/app/[lang]/(protected)/(details)/lib/searchById';
import { Locale } from '@/src/types';
import { FaPlay } from 'react-icons/fa6';

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
          <div className='bg-gradient-to-b from-black/80 via-black/50 to-black/80 w-full h-full absolute top-0 left-0'></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
            alt='Poster'
            className='w-full h-full object-cover'
          />
        </div>

        <div className='z-10 relative'>
          <h1>{details?.title}</h1>
          <time dateTime='2023'>2023</time>

          <button>
            <FaPlay />
            Watch Now
          </button>
        </div>
      </section>

      <section>
        <p>{details.overview}</p>

        {/* Categories */}
        <ul>
          <li>Action</li>
        </ul>

        <h2>You may like</h2>
      </section>
    </div>
  );
};

export default MovieDetailsPage;
