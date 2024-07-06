import { Locale } from '@/src/types';

type Genre = {
  id: number;
  name: string;
};

export const getGenresId = async (
  type: 'movie' | 'tv',
  lang: Locale
): Promise<[Error?, Genre[]?]> => {
  try {
    const resp = await fetch(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.TMDB_API_KEY}&language=${lang}`,
      { next: { revalidate: 3600 } }
    );

    if (!resp.ok) throw new Error(resp.statusText);

    const { genres } = await resp.json();

    if (!genres) {
      throw new Error('Invalid data format received from the API');
    }

    return [undefined, genres];
  } catch (error) {
    if (error instanceof Error) {
      return [error];
    }
  }

  return [new Error('Unknown error')];
};
