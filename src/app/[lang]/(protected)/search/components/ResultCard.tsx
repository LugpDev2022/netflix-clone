import Image from 'next/image';
import Link from 'next/link';

interface Props {
  image: string;
  title: string;
  releaseYear: string;
}

const ResultCard: React.FC<Props> = ({ image, releaseYear, title }) => {
  //TODO: Set the correct url
  return (
    <Link href='/movies/123' className='result-card'>
      <Image
        src={image}
        width={335}
        height={189}
        alt={`${title} Poster`}
        className='result-card-img'
      />

      <div className='mt-2'>
        <h2 className='font-medium'>{title}</h2>
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
