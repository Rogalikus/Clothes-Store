import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Items } from "../reducers/items-reducer";

export type FetchItemsType = {
  currentPage: string;
  order: string;
  category: string;
  sortId: string;
  search: string;
};

export const fetchItems = createAsyncThunk<Items[], FetchItemsType>(
  "items/fetchStatus",
  async (params) => {
    const { currentPage, order, category, sortId, search } = params;
    const response = await axios.get<Items[]>(
      `https://63a1d3dfa543280f77624573.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortId}&order=${order}&${search}`
    );
    return response.data;
  }
);
