'use client';

import { Locale } from '@/src/types';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  image: string;
  title: string;
  releaseYear: string;
  type: 'tv' | 'movies';
  id: number;
  lang: Locale;
}

const ResultCard: React.FC<Props> = ({
  image,
  releaseYear,
  title,
  type,
  id,
  lang,
}) => {
  return (
    <Link
      href={`/${lang}/${type}/${id}`}
      className='result-card fade-in-animation'
    >
      <Image
        src={image}
        width={335}
        height={189}
        alt={`${title} Poster`}
        className='result-card-img'
      />

      <div className='mt-2'>
        <h3 className='font-medium'>{title}</h3>
        <time
          dateTime={releaseYear}
          className='font-light text-white/80 text-sm'
        >
          {releaseYear}
        </time>
      </div>
    </Link>
  );
};

export default ResultCard;
