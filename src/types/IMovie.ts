export interface IExternalId {
  _id: string;
  imdb: string;
}

export interface ILogo {
  _id: string;
  url?: any;
}

export interface IPoster {
  _id: string;
  url: string;
  previewUrl: string;
}

export interface IRating {
  _id: string;
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface IVotes {
  _id: string;
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface IName {
  _id: string;
  name: string;
}

export interface IMovie {
  externalId: IExternalId;
  logo: ILogo;
  poster: IPoster;
  rating: IRating;
  votes: IVotes;
  id: number;
  type: string;
  name: string;
  description: string;
  year: number;
  alternativeName: string;
  enName?: any;
  movieLength: number;
  names: IName[];
  shortDescription?: any;
}
