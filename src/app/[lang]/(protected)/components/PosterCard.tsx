import { Locale } from '@/src/types';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  posterPath: string;
  alt: string;
  id: number;
  type: 'tv' | 'movie';
  lang: Locale;
}

const PosterCard: React.FC<Props> = ({ alt, posterPath, id, lang, type }) => {
  return (
    <Link href={`/${lang}/details/${type}/${id}`} className='poster-card'>
      <Image
        src={`https://image.tmdb.org/t/p/original${posterPath}`}
        alt={alt}
        width={190}
        height={280}
      />
    </Link>
  );
};

export default PosterCard;
