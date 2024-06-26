import { Locale, TMDBData } from '@/src/types';

export const getSeriesByName = async (
  query: string,
  lang: Locale
): Promise<[Error?, TMDBData[]?]> => {
  try {
    const resp = await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${process.env.TMDB_API_KEY}&language=${lang}&query=${query}`
    );

    const { results }: { results: any[] } = await resp.json();

    // Filter the results that don't have a backdrop path
    const filteredResults = results.filter(
      ({ backdrop_path }) => backdrop_path
    );

    const parsedResults: TMDBData[] = filteredResults.map(
      ({ backdrop_path, id, poster_path, first_air_date, name }) => ({
        id,
        title: name,
        poster_path,
        release_date: first_air_date,
        backdrop_path,
      })
    );

    return [undefined, results];
  } catch (error) {
    if (error instanceof Error) return [error];
  }

  return [new Error('Unkown error')];
};
