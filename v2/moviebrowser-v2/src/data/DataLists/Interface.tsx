import * as React from 'react';

export interface Genres {
  id: string;
  name: string;
}

export interface DatasDetail {
  id: string;
  poster_path: string;
  title: string;
  genres?: Genres[];
  overview: string;
  vote_average?: number;
  production_compagnies?: string;
  production_countries?: string;
  runtime: number;
  release_date?: Date;
  first_air_date?: Date;
  number_of_episodes?: number;
  number_of_seasons?: number;
  video?: boolean;
}

export interface DataPoster {
  backdrop_path: string;
  overview: string;
  title: string;
  id: string;
}

export interface DataList {
  name: string;
  details?: DatasDetail[];
  link: string;
  id: string;
}
