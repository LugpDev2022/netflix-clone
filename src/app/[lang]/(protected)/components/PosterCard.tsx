import Image from 'next/image';
import Link from 'next/link';

interface Props {
  image: string;
  alt: string;
  href: string;
}

const PosterCard: React.FC<Props> = ({ alt, href, image }) => {
  return (
    <Link href={href} className='poster-card'>
      <Image
        src={image}
        className='h-full w-full object-cover'
        alt={alt}
        width={190}
        height={280}
      />
    </Link>
  );
};

export default PosterCard;
