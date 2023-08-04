import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";
import { navReducer } from "./navReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  nav: navReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
