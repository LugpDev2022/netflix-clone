import { Locale } from '@/src/types';
import { getPopularMovies } from '@/src/app/[lang]/(protected)/lib/getPopularMovies';
import { getPopularSeries } from '@/src/app/[lang]/(protected)/lib/getPopularSeries';

type SliderType = 'mixed' | 'movies' | 'series';

type Series = {
  backdrop_path: string;
  id: number;
  name: string;
  first_air_date: number;
};

type Movie = {
  backdrop_path: string;
  id: number;
  title: string;
  release_date: number;
};

export type PopularSliderItem = {
  backdrop_path: string;
  id: number;
  title: string;
  release_year: number;
  type: 'series' | 'movies';
};

export const getSliderData = async (
  sliderType: SliderType,
  lang: Locale
): Promise<[Error?, PopularSliderItem[]?]> => {
  const sliderData: PopularSliderItem[] = [];

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
      const movieItems = slicedMovies?.map((movie: Movie) => ({
        type: 'movies' as 'movies',
        backdrop_path: movie.backdrop_path,
        id: movie.id,
        title: movie.title,
        release_year: new Date(movie.release_date).getFullYear(),
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
      const seriesItems = slicedSeries.map((series: Series) => ({
        type: 'series' as 'series',
        backdrop_path: series.backdrop_path,
        id: series.id,
        title: series.name,
        release_year: new Date(series.first_air_date).getFullYear(),
      }));

      sliderData.push(...seriesItems);
    }

    return [undefined, sliderData];
  } catch (error) {
    if (error instanceof Error) return [error];
  }

  return [new Error('Unknown error')];
};
