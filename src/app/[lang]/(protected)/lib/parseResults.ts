import { TMDBData } from '@/src/types';

export const parseResults = (
  type: 'tv' | 'movie' | 'default',
  results: []
): TMDBData[] => {
  // Filter the results that don't have a backdrop path
  const filteredResults = results.filter(
    ({ backdrop_path, poster_path }) => backdrop_path && poster_path
  );

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
      media_type,
    }) => ({
      id,
      type: type === 'default' ? media_type : type,
      title: title || name,
      release_date: release_date || first_air_date,
      poster_path,
      backdrop_path,
    })
  );

  return parsedResults;
};
