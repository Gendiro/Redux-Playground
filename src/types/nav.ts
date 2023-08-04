export interface NavState {
  currentPage: string;
}

export enum NavActions {
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
}

interface SetCurrentPageAction {
  type: NavActions.SET_CURRENT_PAGE;
  payload: string;
}

export type NavAction = SetCurrentPageAction;
