import Image from 'next/image';

interface Props {
  image: string;
  title: string;
  releaseYear: string;
}

const ResultCard: React.FC<Props> = ({ image, releaseYear, title }) => {
  return (
    <article>
      <Image
        src={image}
        width={335}
        height={189}
        alt={`${title} Poster`}
        className='rounded-sm'
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
    </article>
  );
};

export default ResultCard;
