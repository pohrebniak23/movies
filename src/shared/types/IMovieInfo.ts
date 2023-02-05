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

export interface Backdrop {
  _id: string;
  url?: any;
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

export interface Trailer {
  _id: string;
  url: string;
  name: string;
  site: string;
}

export interface Videos {
  _id: string;
  trailers: Trailer[];
  teasers: any[];
}

export interface Budget {
  _id: string;
}

export interface World {
  _id: string;
  value: number;
  currency: string;
}

export interface Usa {
  _id: string;
  value: number;
  currency: string;
}

export interface Fees {
  world: World;
  usa: Usa;
  _id: string;
}

export interface Distributors {
  distributor?: any;
  distributorRelease?: any;
}

export interface Premiere {
  _id: string;
  country: string;
  world: Date;
}

export interface Images {
  framesCount: number;
}

export interface ProductionCompany {
  name: string;
  url: string;
  previewUrl: string;
}

export interface SpokenLanguage {
  name: string;
  nameEn: string;
}

export interface Genre {
  name: string;
}

export interface Country {
  name: string;
}

export interface IPerson {
  id: number;
  name: string;
  enName: string;
  description: string;
  enProfession: string;
  photo: string;
}

export interface Name {
  name: string;
}

export interface Technology {
  _id: string;
  hasImax: boolean;
  has3D: boolean;
}

export interface SequelsAndPrequel {
  _id: string;
}

export interface ImagesInfo {
  _id: string;
  framesCount: number;
}

export interface IMovieInfo {
  externalId: ExternalId;
  logo: Logo;
  poster: Poster;
  backdrop: Backdrop;
  rating: Rating;
  votes: Votes;
  videos: Videos;
  budget: Budget;
  fees: Fees;
  distributors: Distributors;
  premiere: Premiere;
  images: Images;
  collections: any[];
  updateDates: Date[];
  status: string;
  movieLength: number;
  productionCompanies: ProductionCompany[];
  spokenLanguages: SpokenLanguage[];
  id: number;
  type: string;
  name: string;
  description: string;
  slogan?: any;
  year: number;
  facts: any[];
  genres: Genre[];
  countries: Country[];
  seasonsInfo: any[];
  persons: IPerson[];
  lists: any[];
  typeNumber: number;
  alternativeName: string;
  enName?: any;
  names: Name[];
  ageRating: number;
  ratingMpaa: string;
  shortDescription?: any;
  technology: Technology;
  ticketsOnSale: boolean;
  updatedAt: Date;
  similarMovies: any[];
  sequelsAndPrequels: SequelsAndPrequel[];
  imagesInfo: ImagesInfo;
  createDate: Date;
}
