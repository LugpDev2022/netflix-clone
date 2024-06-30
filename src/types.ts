export type Locale = 'es' | 'en';

export type TMDBData = {
  id: number;
  type: 'tv' | 'movies';
  title: string;
  poster_path: string;
  release_date: string;
  backdrop_path: string;
};
