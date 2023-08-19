import { combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "./todoReducer";
import navReducer from "./navReducer";
import {userSlice} from "./userReducer.ts";
import {postAPI} from "../../services/PostService.ts";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  todo: todoReducer,
  [postAPI.reducerPath]: postAPI.reducer,
  nav: navReducer
});

export type RootState = ReturnType<typeof rootReducer>;
