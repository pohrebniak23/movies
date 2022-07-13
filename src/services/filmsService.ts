import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.kinopoisk.dev' }),
  endpoints: (builder) => ({
    getLatestFilms: builder.query<any, any>({
      query: () => ({
        url: `/movie?field=rating.kp&search=5-10&field=year&search=2022&token=${process.env.REACT_APP_TOKEN}`
      })
    }),
    getFilmById: builder.query<any, any>({
      query: (id) => ({
        url: `/movie?field=id&search=${id}&token=${process.env.REACT_APP_TOKEN}`
      })
    }),
    getFilmBackdrop: builder.query<any, any>({
      query: (id) => ({
        url: `/image?field=movieId&search=${id}&field=type&search=backdrops&token=${process.env.REACT_APP_TOKEN}`
      })
    })
  })
});