import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IActor } from '../types/IActor';
import { IMovieInfo } from '../types/IMovieInfo';
import { IMoviesData } from '../types/IMoviesData';
import { IQueryContentByCategory, IQueryLatestContent } from '../types/IQuery';

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.kinopoisk.dev' }),
  endpoints: (builder) => ({
    getLatestContent: builder.query<IMoviesData, IQueryLatestContent>({
      query: ({ category, limit }) => ({
        url: `/movie?field=rating.kp&search=5-10&field=type&search=${category}&field=year&search=${new Date().getFullYear()}&limit=${limit}&token=${
          process.env.REACT_APP_TOKEN
        }`,
      }),
    }),
    getContentByCategory: builder.query<IMoviesData, IQueryContentByCategory>({
      query: ({ category, year, rating, genre, limit }) => ({
        url: `/movie?${genre}&field=rating.kp&search=${rating.min}-${rating.max}&field=type&search=${category}&field=year&search=${year.min}-${year.max}&limit=${limit}&token=${process.env.REACT_APP_TOKEN}`,
      }),
    }),
    getFilmByName: builder.query<IMoviesData, string>({
      query: (name) => ({
        url: `/movie?field=name&search=${name}&isStrict=false&token=${process.env.REACT_APP_TOKEN}`,
      }),
    }),
    getFilmById: builder.query<IMovieInfo, string | undefined>({
      query: (id) => ({
        url: `/movie?field=id&search=${id}&token=${process.env.REACT_APP_TOKEN}`,
      }),
    }),
    getActorById: builder.query<IActor, string | undefined>({
      query: (id) => ({
        url: `/person?field=id&search=${id}&token=${process.env.REACT_APP_TOKEN}`,
      }),
    }),
    getActorImageById: builder.query<any, number>({
      query: (id) => ({
        url: `/image?field=movieId&search=${id}&field=type&search=backdrops&token=${process.env.REACT_APP_TOKEN}`,
      }),
    }),
  }),
});
