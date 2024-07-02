import { parseResults } from '@/src/app/[lang]/(protected)/lib/parseResults';
import { Locale, TMDBData } from '@/src/types';

export const getRecommendations = async (
  type: 'movie' | 'tv',
  id: number,
  lang: Locale
): Promise<[Error?, TMDBData[]?]> => {
  try {
    const resp = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${process.env.TMDB_API_KEY}&language=${lang}`,
      { next: { revalidate: 3600 } }
    );

    if (!resp.ok) throw new Error(resp.statusText);

    const { results }: { results: [] } = await resp.json();

    if (!results) {
      throw new Error('Invalid data format received from the API');
    }

    const parsedData = parseResults(type as any, results);

    return [undefined, parsedData];
  } catch (error) {
    if (error instanceof Error) return [error];
  }

  return [new Error('Unkown error')];
};
