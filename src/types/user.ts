export interface UserItem {
  id: number;
  name: string;
  username: string;
  email: "Sincere@april.biz";
  adress: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface UserState {
  users: UserItem[];
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_UESRS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_UESRS_SUCCESS;
  payload: UserItem[];
}

interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction;
