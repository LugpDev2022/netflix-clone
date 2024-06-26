import { Locale } from '@/src/types';

export const getSeriesByName = async (
  query: string,
  lang: Locale
): Promise<[Error?, []?]> => {
  try {
    const resp = await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${process.env.TMDB_API_KEY}&language=${lang}&query=${query}`
    );

    const { results } = await resp.json();

    return [undefined, results];
  } catch (error) {
    if (error instanceof Error) return [error];
  }

  return [new Error('Unkown error')];
};
