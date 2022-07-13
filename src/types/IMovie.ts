export interface ExternalId {
  _id: string;
  imdb: string;
}

export interface Logo {
  _id: string;
  url?: any;
}

export interface Poster {
  _id: string;
  url: string;
  previewUrl: string;
}

export interface Rating {
  _id: string;
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface Votes {
  _id: string;
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface Name {
  _id: string;
  name: string;
}

export interface IMovie {
  externalId: ExternalId;
  logo: Logo;
  poster: Poster;
  rating: Rating;
  votes: Votes;
  id: number;
  type: string;
  name: string;
  description: string;
  year: number;
  alternativeName: string;
  enName?: any;
  movieLength: number;
  names: Name[];
  shortDescription?: any;
}
