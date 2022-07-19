import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.kinopoisk.dev' }),
  endpoints: (builder) => ({
    getLatestContent: builder.query<any, any>({
      query: ({category, limit}) => ({
        url: `/movie?field=rating.kp&search=5-10&field=type&search=${category}&field=year&search=${new Date().getFullYear()}&limit=${limit}&token=${process.env.REACT_APP_TOKEN}`
      })
    }),
    getContentByCategory: builder.query<any, any>({
      query: ({category, year, rating, genre, limit}) => ({
        url: `/movie?${genre}&field=rating.kp&search=${rating.min}-${rating.max}&field=type&search=${category}&field=year&search=${year.min}-${year.max}&limit=${limit}&token=${process.env.REACT_APP_TOKEN}`
      })
    }),
    getFilmByName: builder.query<any, any>({
      query: (name) => ({
        url: `/movie?field=name&search=${name}&isStrict=false&token=${process.env.REACT_APP_TOKEN}`
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