import { NavAction, NavActions } from "../../types/nav";

export const setCurrentPage = (currentPage: string): NavAction => {
  return { type: NavActions.SET_CURRENT_PAGE, payload: currentPage };
};
