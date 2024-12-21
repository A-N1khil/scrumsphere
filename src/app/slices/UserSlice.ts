import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../shared/User';

const demoUser: User = {
    name: 'Nikhil',
    email: 'johndoe@example.com',
    role: 'developer',
}

export interface UserState {
    user: User | null;
}

// TODO Add initialState to be null here
const initialState: UserState = {
    user: demoUser,
}

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = null;
        }
    },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;