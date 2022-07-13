import { IMovie } from "./IMovie";

export interface IData {
  docs: IMovie[],
  limit: number,
  page: number,
  pages: number,
  total: number,
}