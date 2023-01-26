import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export enum SortIdType {
  RATING_DESC = "rating",
  RATING_ASC = "-rating",
  TITLE_DESC = "title",
  TITLE_ASC = "-title",
  PRICE_DESC = "price",
  PRICE_ASC = "-price",
}
export type SortProdType = {
  name: string;
  sortId: SortIdType;
};

export interface FilterStateType {
  searchValue: string;
  categoryIndex: number;
  currentPage: number;
  sortProd: SortProdType;
}

const initialState: FilterStateType = {
  searchValue: "",
  categoryIndex: 0,
  currentPage: 1,
  sortProd: {
    name: "популярності(По спаданню)",
    sortId: SortIdType.RATING_DESC,
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryIndex(state, action: PayloadAction<number>) {
      state.categoryIndex = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSortProd(state, action: PayloadAction<SortProdType>) {
      state.sortProd = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterStateType>) {
      state.sortProd = action.payload.sortProd;
      state.categoryIndex = Number(action.payload.categoryIndex);
      state.currentPage = Number(action.payload.currentPage);
    },
  },
});

export const filterSelector = (state: RootState) => {
  return state.filter;
};

export const {
  setCategoryIndex,
  setSortProd,
  setCurrentPage,
  setFilters,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
