import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: () => 'Under construction',
    filterCategories: (state, { payload }) => [...state].filter((item) => item.country !== payload),
  },
});

export const { checkStatus, filterCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
