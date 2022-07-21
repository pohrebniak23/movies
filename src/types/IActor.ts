export interface Spous {
  _id: string;
  id: number;
  name: string;
  divorced: boolean;
  divorcedReason: string;
  sex: string;
  children: number;
  relation: string;
}

export interface Fact {
  value: string;
}

export interface IActorMovies {
  id: number;
  name: string;
  rating?: number;
  general: boolean;
  description: string;
}

export interface Profession {
  value: string;
}

export interface IActor {
  spouses: Spous[];
  id: number;
  __v: number;
  age: number;
  birthPlace: any[];
  birthday: Date;
  countAwards: number;
  createdAt: Date;
  death?: any;
  deathPlace: any[];
  enName: string;
  facts: Fact[];
  growth: number;
  movies: IActorMovies[];
  name: string;
  photo: string;
  profession: Profession[];
  sex: string;
  updatedAt: Date;
}
