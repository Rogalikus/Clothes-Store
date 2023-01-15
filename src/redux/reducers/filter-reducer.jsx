import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryIndex: 0,
  currentPage: 1,
  sortProd: {
    name: "популярності(По спаданню)",
    sortId: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryIndex(state, action) {
      state.categoryIndex = action.payload;
    },
    setSortProd(state, action) {
      state.sortProd = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.sortProd = action.payload.sortProd;
      state.categoryIndex = Number(action.payload.categoryIndex);
      state.currentPage = Number(action.payload.currentPage);
    },
  },
});

export const { setCategoryIndex, setSortProd, setCurrentPage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
