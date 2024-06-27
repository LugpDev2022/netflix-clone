import { TMDBData } from '@/src/types';

export const parseResults = (
  type: 'series' | 'movies',
  results: []
): TMDBData[] => {
  // Filter the results that don't have a backdrop path
  const filteredResults = results.filter(({ backdrop_path }) => backdrop_path);

  // Return just the used values
  const parsedResults: TMDBData[] = filteredResults.map(
    ({
      backdrop_path,
      id,
      poster_path,
      release_date,
      first_air_date,
      title,
      name,
    }) => ({
      id,
      type,
      title: title || name,
      release_date: release_date || first_air_date,
      poster_path,
      backdrop_path,
    })
  );

  return parsedResults;
};
