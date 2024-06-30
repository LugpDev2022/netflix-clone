import { getAllPopular } from '@/src/app/[lang]/(protected)/lib/getAllPopular';
import { getPopularMovies } from '@/src/app/[lang]/(protected)/lib/getPopularMovies';
import { getPopularSeries } from '@/src/app/[lang]/(protected)/lib/getPopularSeries';
import { Locale, TMDBData } from '@/src/types';

type SliderType = 'mixed' | 'movies' | 'tv';

const fetchData = async (
  fetchHandler: (lang: Locale) => Promise<[Error?, TMDBData[]?]>,
  lang: Locale,
  errorMessage: string
): Promise<[Error?, TMDBData[]?]> => {
  const [err, results] = await fetchHandler(lang);

  if (err) {
    return [err];
  }

  if (!results || results.length === 0) {
    return [new Error(errorMessage)];
  }

  return [undefined, results.slice(0, 6)];
};

export const getSliderData = async (
  sliderType: SliderType,
  lang: Locale
): Promise<[Error?, TMDBData[]?]> => {
  try {
    switch (sliderType) {
      case 'mixed':
        return await fetchData(getAllPopular, lang, 'No results returned');
      case 'movies':
        return await fetchData(getPopularMovies, lang, 'No movies returned');
      case 'tv':
        return await fetchData(getPopularSeries, lang, 'No series returned');
      default:
        throw new Error('Unknown slider type');
    }
  } catch (error) {
    return [error instanceof Error ? error : new Error('Unknown error')];
  }
};
