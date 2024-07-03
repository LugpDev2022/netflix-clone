import { parseResults } from '@/src/app/[lang]/(protected)/lib/parseResults';
import { Locale, TMDBData } from '@/src/types';

export const fetchTMDB = async (
  lang: Locale,
  endpoint: string,
  type: 'movie' | 'tv'
): Promise<[Error?, TMDBData[]?]> => {
  try {
    const resp = await fetch(
      `https://api.themoviedb.org/3${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=${lang}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    const { results }: { results: [] } = await resp.json();

    const parsedResults = parseResults(type, results);

    return [undefined, parsedResults];
  } catch (error) {
    if (error instanceof Error) {
      return [error];
    }
  }

  return [new Error('Unknown error')];
};
