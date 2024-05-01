import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  loading: true,
  error: false,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    fetchFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    addCategory: (state, action) => {
      state.categories = [...state.categories, action.payload];
    }
  },
});

export const { fetchStart, fetchSuccess, fetchFailure } = categorySlice.actions;

export default categorySlice.reducer;