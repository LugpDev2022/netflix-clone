import { parseResults } from '@/src/app/[lang]/(protected)/lib/parseResults';
import { Locale, TMDBData } from '@/src/types';

export const getPopularSeries = async (
  lang: Locale
): Promise<[Error?, TMDBData[]?]> => {
  try {
    const resp = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}&language=${lang}&sort_by=popularity.desc`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    const { results }: { results: [] } = await resp.json();

    const parsedResults = parseResults(results);

    return [undefined, parsedResults];
  } catch (error) {
    if (error instanceof Error) {
      return [error];
    }
  }

  return [new Error('Unknown error')];
};
