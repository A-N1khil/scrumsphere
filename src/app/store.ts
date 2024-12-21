import { configureStore, Store } from "@reduxjs/toolkit";
import userReducer, { UserState } from "@/app/slices/UserSlice";

export const store: Store<{ user: UserState }> = configureStore({
    reducer: {
        user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;