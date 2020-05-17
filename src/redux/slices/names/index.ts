import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../createStore";

type SliceState = string[];

const initialState: SliceState = [];

const namesSlice = createSlice({
  name: "names",
  initialState,
  reducers: {
    addName(state, action: PayloadAction<string>) {
      return state.find((n) => n === action.payload)
        ? state
        : [...state, action.payload];
    },
    removeName(state, action: PayloadAction<string>) {
      return state.filter((n) => n !== action.payload);
    },
  },
});

const { actions, reducer } = namesSlice;

export const { addName, removeName } = actions;

export const selectNames = (state: RootState) => {
  return state.names;
};

export default reducer;