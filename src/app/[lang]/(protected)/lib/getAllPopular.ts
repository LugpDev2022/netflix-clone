import { parseResults } from '@/src/app/[lang]/(protected)/lib/parseResults';
import { Locale, TMDBData } from '@/src/types';

export const getAllPopular = async (
  lang: Locale
): Promise<[Error?, TMDBData[]?]> => {
  try {
    const resp = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.TMDB_API_KEY}&language=${lang}`,
      { next: { revalidate: 3600 } }
    );

    if (!resp.ok) throw new Error(resp.statusText);

    const data = await resp.json();

    if (!data.results) {
      throw new Error('Invalid data format received from the API');
    }

    const parsedResults = parseResults('default', data.results);

    return [undefined, parsedResults];
  } catch (error) {
    if (error instanceof Error) return [error];
  }

  return [new Error('Unknown error')];
};
