import { parseRuntime } from '@/src/app/[lang]/(protected)/(details)/lib/parseRuntime';

interface Props {
  type: 'movie' | 'tv';
  runtime?: number;
  releaseYear: number;
  seasons?: number;
  dict: any;
}

const AdditionalInfo: React.FC<Props> = ({
  type,
  runtime = 0,
  releaseYear,
  seasons = 1,
  dict,
}) => {
  const { hours, minutes } = parseRuntime(runtime);

  return (
    <div className='text-white/80 my-2.5 flex flex-row gap-5'>
      {type === 'movie' && runtime > 0 && (
        <span>{`${hours}h ${minutes}min`}</span>
      )}

      {type === 'tv' && (
        /**
         * Output examples
         * 1 season - 1 temporada
         * 3 seasons - 3 temporadas
         */

        <span>{`${seasons} ${dict.app.details.season}${
          seasons > 1 ? 's' : ''
        }`}</span>
      )}

      {releaseYear && (
        <time dateTime={releaseYear.toString()}>{releaseYear}</time>
      )}
    </div>
  );
};

export default AdditionalInfo;
