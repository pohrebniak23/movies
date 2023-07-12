import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IQueryContentByCategory,
  IQueryLatestContent,
} from 'shared/types/IQuery';
import { IActor } from '../shared/types/IActor';
import { IMovieInfo } from '../shared/types/IMovieInfo';
import { IMoviesData } from '../shared/types/IMoviesData';

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.kinopoisk.dev',
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', `${process.env.REACT_APP_FILMS_TOKEN}`);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getLatestContent: builder.query<IMoviesData, IQueryLatestContent>({
      query: ({ category, limit }) => ({
        url: `/v1.3/movie?field=rating.kp&search=5-10&field=type&search=${category}&field=year&search=${new Date().getFullYear()}&limit=${limit}`,
      }),
    }),
    getContentByCategory: builder.query<IMoviesData, IQueryContentByCategory>({
      query: ({ category, year, rating, genre, limit }) => ({
        url: `/v1.3/movie?${genre}&field=rating.kp&search=${rating.min}-${rating.max}&field=type&search=${category}&field=year&search=${year.min}-${year.max}&limit=${limit}`,
      }),
    }),
    getFilmByName: builder.query<IMoviesData, string>({
      query: (name) => ({
        url: `/v1.3/movie?field=name&search=${name}&isStrict=false`,
      }),
    }),
    getFilmById: builder.query<IMovieInfo, string | number>({
      query: (id) => ({
        url: `/v1.3/movie/${id}`,
      }),
    }),
    getActorById: builder.query<IActor, string | number>({
      query: (id) => ({
        url: `/v1/person/${id}`,
      }),
    }),
    getSavedFilms: builder.query<IMoviesData, string[]>({
      // @ts-ignore
      queryFn: async (ids, api, extraOptions, fetchWithBQ) => {
        const results = await Promise.all(
          ids.map((id) => {
            return fetchWithBQ({
              url: `/v1.3/movie/${id}`,
            });
          }),
        );

        return {
          data: results.map((item: any) => item.data),
        };
      },
    }),
    getImageById: builder.query<any, number>({
      query: (id) => ({
        url: `/v1/image?field=movieId&search=${id}&field=type&search=backdrops`,
      }),
    }),
  }),
});
