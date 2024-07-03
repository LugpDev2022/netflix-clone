import { Locale } from '@/src/types';

type Response = {
  title: string;
  overview: string;
  backdrop_path: string;
  release_date: string;
  genres: [{ name: string }];
  runtime?: number;
  number_of_seasons?: number;
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

    const usedData: Response = {
      backdrop_path: data.backdrop_path,
      genres: data.genres,
      overview: data.overview,
      title: data.title || data.name,
      release_date: data.release_date || data.first_air_date,
      number_of_seasons: data.number_of_seasons,
      runtime: data.runtime,
    };

    return [undefined, usedData];
  } catch (error) {
    if (error instanceof Error) return [error];
  }

  return [new Error('Unkown error')];
};
