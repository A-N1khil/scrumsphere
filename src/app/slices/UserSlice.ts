import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/users/User";

const demoUser: User = {
  userId: "Alice",
  name: "Alice",
  email: "johndoe@example.com",
  role: "developer",
};

export interface UserState {
  user: User | null;
}

// TODO Add initialState to be null here
const initialState: UserState = {
  user: demoUser,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
