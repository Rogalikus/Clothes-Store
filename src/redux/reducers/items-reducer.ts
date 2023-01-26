import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchItems } from "../api/ItemsAPI";
import { RootState } from "../store";

export type Items = {
  id: string;
  title: string;
  sizes: Array<number>;
  price: number;
  count: number;
  imageUrl: string;
  types: Array<number>;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface ItemsStateType {
  fetchStatus: Status;
  items: Array<Items>;
}

const initialState: ItemsStateType = {
  items: [],
  fetchStatus: Status.LOADING,
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setitems(state, action: PayloadAction<Items[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.fetchStatus = Status.SUCCESS;
    });
    builder.addCase(fetchItems.pending, (state) => {
      state.fetchStatus = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchItems.rejected, (state) => {
      state.fetchStatus = Status.ERROR;
      state.items = [];
    });
  },
});

export const itemsSelector = (state: RootState) => {
  return state.items;
};

export const { setitems } = itemsSlice.actions;

export default itemsSlice.reducer;
