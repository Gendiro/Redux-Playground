import { UserItem } from "../../types/user";
import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
      try {
          const response = await axios.get<UserItem[]>("https://jsonplaceholder.typicode.com/users");
          return response.data;
      } catch (e) {
          return thunkAPI.rejectWithValue(String(e));
      }
    }
)