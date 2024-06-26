import { Locale, TMDBData } from '@/src/types';

export const getMoviesByName = async (
  query: string,
  lang: Locale
): Promise<[Error?, TMDBData[]?]> => {
  try {
    const resp = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=${lang}&query=${query}`
    );

    const { results }: { results: [] } = await resp.json();

    // Filter the results that don't have a backdrop path
    const filteredResults = results.filter(
      ({ backdrop_path }) => backdrop_path
    );

    const parsedResults: TMDBData[] = filteredResults.map(
      ({ backdrop_path, id, poster_path, release_date, title }) => ({
        id,
        title,
        poster_path,
        release_date,
        backdrop_path,
      })
    );

    return [undefined, parsedResults];
  } catch (error) {
    if (error instanceof Error) return [error];
  }

  return [new Error('Unkown error')];
};
