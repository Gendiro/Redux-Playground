import { NavAction, NavActions, NavState } from "../../types/nav";

const initialState: NavState = {
  currentPage: "users",
};

export const navReducer = (
  state: NavState = initialState,
  action: NavAction
): NavState => {
  switch (action.type) {
    case NavActions.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};
