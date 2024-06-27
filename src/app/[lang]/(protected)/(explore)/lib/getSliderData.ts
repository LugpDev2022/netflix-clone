import { getPopularMovies } from '@/src/app/[lang]/(protected)/lib/getPopularMovies';
import { getPopularSeries } from '@/src/app/[lang]/(protected)/lib/getPopularSeries';
import { Locale, TMDBData } from '@/src/types';

type SliderType = 'mixed' | 'movies' | 'series';

export const getSliderData = async (
  sliderType: SliderType,
  lang: Locale
): Promise<[Error?, TMDBData[]?]> => {
  const sliderData: TMDBData[] = [];

  try {
    if (sliderType === 'mixed' || sliderType === 'movies') {
      const [err, movies] = await getPopularMovies(lang);

      if (err) {
        throw err;
      }

      if (!movies) {
        throw new Error('No movies returned');
      }

      // Get top 3 popular movies
      const slicedMovies = movies.slice(0, 3);

      sliderData.push(...slicedMovies);
    }

    if (sliderType === 'mixed' || sliderType === 'series') {
      const [err, series] = await getPopularSeries(lang);

      if (err) {
        throw err;
      }

      if (!series) {
        throw new Error('No series returned');
      }

      // Get top 3 popular series
      const slicedSeries = series.slice(0, 3);

      sliderData.push(...slicedSeries);
    }

    return [undefined, sliderData];
  } catch (error) {
    if (error instanceof Error) return [error];
  }

  return [new Error('Unknown error')];
};
