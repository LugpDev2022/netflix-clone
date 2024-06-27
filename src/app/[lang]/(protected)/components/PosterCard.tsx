import Image from 'next/image';
import Link from 'next/link';

interface Props {
  posterPath: string;
  alt: string;
  href: string;
}

const PosterCard: React.FC<Props> = ({ alt, href, posterPath }) => {
  return (
    <Link href={href} className='poster-card'>
      <Image
        src={`https://image.tmdb.org/t/p/original${posterPath}`}
        className='h-full w-full object-cover'
        alt={alt}
        width={190}
        height={280}
      />
    </Link>
  );
};

export default PosterCard;
