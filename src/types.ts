export type Locale = 'es' | 'en';

export type TMDBData = {
  id: number;
  type: 'tv' | 'movie';
  title: string;
  poster_path: string;
  release_date: string;
  backdrop_path: string;
};
