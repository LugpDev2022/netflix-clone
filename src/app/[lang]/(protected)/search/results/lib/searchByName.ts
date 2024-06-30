import { parseResults } from '@/src/app/[lang]/(protected)/lib/parseResults';
import { Locale, TMDBData } from '@/src/types';

export const searchByName = async (
  query: string,
  lang: Locale
): Promise<[Error?, TMDBData[]?]> => {
  try {
    const resp = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.TMDB_API_KEY}&language=${lang}&query=${query}`
    );

    if (!resp.ok) throw new Error(resp.statusText);

    const { results }: { results: [] } = await resp.json();

    if (!results) {
      throw new Error('Invalid data format received from the API');
    }

    const parsedResults = parseResults('default', results);

    return [undefined, parsedResults];
  } catch (error) {
    if (error instanceof Error) return [error];
  }

  return [new Error('Unkown error')];
};
