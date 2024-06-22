import Image from 'next/image';
import Link from 'next/link';

interface Props {
  image: string;
  alt: string;
  href: string;
}

const Card: React.FC<Props> = ({ alt, href, image }) => {
  return (
    <Link href={href} className='search-card inline'>
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

export default Card;