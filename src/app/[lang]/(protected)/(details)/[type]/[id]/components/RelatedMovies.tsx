import Carousel from '@/src/app/[lang]/(protected)/(browse)/components/Carousel';
import { getRecommendations } from '@/src/app/[lang]/(protected)/(details)/lib/getRecommendations';
import { getDictionary } from '@/src/app/[lang]/dictionaries';
import { Locale } from '@/src/types';

interface Props {
  id: number;
  lang: Locale;
  type: 'movie' | 'tv';
}

const RelatedMovies: React.FC<Props> = async ({ id, lang, type }) => {
  const dict = await getDictionary(lang);
  const [err, recommendations] = await getRecommendations(type, id, lang);

  if (err || !recommendations)
    return <p className='px-5 md:px-10'>{dict.error}</p>;

  return <Carousel data={recommendations} lang={lang} />;
};

export default RelatedMovies;
