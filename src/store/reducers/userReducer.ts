import {UserState, UserItem} from "../../types/user";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "../action-creators/user.ts";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchUsers.pending.type]: (state) => {
            state.loading = true;
            state.error = null;
            state.users = [];
        },
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<UserItem[]>) => {
            state.loading = false;
            state.error = null;
            state.users = action.payload;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
            state.users = [];
        }
    }
});