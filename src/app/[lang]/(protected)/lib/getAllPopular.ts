import { parseResults } from '@/src/app/[lang]/(protected)/lib/parseResults';
import { Locale, TMDBData } from '@/src/types';

export const getAllPopular = async (
  lang: Locale
): Promise<[Error?, TMDBData[]?]> => {
  try {
    const resp = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.TMDB_API_KEY}&language=${lang}`
    );

    const { results }: { results: [] } = await resp.json();

    const parsedResults = parseResults('default', results);

    return [undefined, parsedResults];
  } catch (error) {
    if (error instanceof Error) return [error];
  }

  return [new Error('Unkown error')];
};
