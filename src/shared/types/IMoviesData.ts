import { IData } from './IData';
import { IMovie } from './IMovie';

export interface IMoviesData extends IData {
  docs: IMovie[];
}
