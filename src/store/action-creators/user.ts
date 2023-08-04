import type { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/user";
import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS, error: null, users: [] });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({
        type: UserActionTypes.FETCH_UESRS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "Error while fetching users",
      });
    }
  };
};
