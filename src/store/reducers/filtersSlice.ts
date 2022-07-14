import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  year: string,
  rating: string,
}

const initialState: InitialState = {
  year: "2022",
  rating: "5-10",
}

const filtersSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: ({
    setYear(state, action: PayloadAction<string>) {
      state.year = action.payload
    },
    setRating(state, action: PayloadAction<string>) {
      state.rating = action.payload
    }
  })
});

export default filtersSlice.reducer;
export const {
  setYear,
  setRating
} = filtersSlice.actions;