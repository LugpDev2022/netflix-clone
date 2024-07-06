import { Locale, TMDBData } from '@/src/types';

export const getByGenre = async (
  type: 'movie' | 'tv',
  lang: Locale,
  id: number
): Promise<[Error?, TMDBData[]?]> => {
  try {
    const resp = await fetch(
      `https://api.themoviedb.org/3/discover/${type}?api_key=${process.env.TMDB_API_KEY}&language=${lang}&with_genres=${id}`,
      { next: { revalidate: 3600 } }
    );

    if (!resp.ok) throw new Error(resp.statusText);

    const data = await resp.json();

    if (!data.results) {
      throw new Error('Invalid data format received from the API');
    }

    return [undefined, data.results];
  } catch (error) {
    if (error instanceof Error) {
      return [error];
    }
  }

  return [new Error('Unknown error')];
};
