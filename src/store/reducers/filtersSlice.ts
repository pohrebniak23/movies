import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  year: {
    min: number,
    max: number
  },
  rating: {
    min: number,
    max: number
  },
  genre: string
}

export const initialState: InitialState = {
  year: {
    min: 2012,
    max: 2022
  },
  rating: {
    min: 5,
    max: 10
  },
  genre: ""
}

const filtersSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: ({
    setYear(state, action: PayloadAction<number[]>) {
      state.year = {
        min: action.payload[0],
        max: action.payload[1]
      }
    },
    setRating(state, action: PayloadAction<number[]>) {
      state.rating = {
        min: action.payload[0],
        max: action.payload[1]
      }
    },
    setGenre(state, action: PayloadAction<string>) {
      state.genre = action.payload
    },
    reset: () => initialState
  })
});

export default filtersSlice.reducer;
export const {
  setYear,
  setRating,
  setGenre,
  reset
} = filtersSlice.actions;