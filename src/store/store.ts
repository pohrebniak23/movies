import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filmsApi } from "../services/filmsService";
import filtersSlice from "./reducers/filtersSlice";

const rootReducer = combineReducers({
  filters: filtersSlice,
  [filmsApi.reducerPath]: filmsApi.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(filmsApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
