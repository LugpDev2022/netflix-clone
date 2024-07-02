import { Locale } from '@/src/types';

type Response = {
  title: string;
};

export const searchById = async (
  type: 'tv' | 'movie',
  id: number,
  lang: Locale
): Promise<[Error?, Response?]> => {
  try {
    const resp = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.TMDB_API_KEY}&language=${lang}`,
      { cache: 'no-store' }
    );

    if (!resp.ok) throw new Error(resp.statusText);

    const data = await resp.json();

    return [undefined, data];
  } catch (error) {
    if (error instanceof Error) return [error];
  }

  return [new Error('Unkown error')];
};
