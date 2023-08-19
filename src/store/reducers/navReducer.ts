import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NavState } from "../../types/nav";

const initialState: NavState = {
  currentPage: "posts",
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<string>) {
      state.currentPage = action.payload;
    },
  },
});

export default navSlice.reducer;
