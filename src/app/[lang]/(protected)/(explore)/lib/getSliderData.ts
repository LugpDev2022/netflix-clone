import { Locale } from '@/src/types';
import { getPopularMovies } from '../../search/lib/getPopularMovies';
import { getPopularSeries } from '../../search/lib/getPopularSeries';

type SliderType = 'mixed' | 'movies' | 'series';

export const getSliderData = async (
  sliderType: SliderType,
  lang: Locale
): Promise<[Error?, {}[]?]> => {
  const sliderData: {}[] = [];

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

      // Add movie type
      const movieItems = slicedMovies?.map((movie: {}) => ({
        type: 'movie',
        ...movie,
      }));

      sliderData.push(...movieItems);
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

      // Add movie type
      const seriesItems = slicedSeries.map((series: {}) => ({
        type: 'series',
        ...series,
      }));

      sliderData.push(...seriesItems);
    }

    return [undefined, sliderData];
  } catch (error) {
    if (error instanceof Error) return [error];
  }

  return [new Error('Unknown error')];
};
