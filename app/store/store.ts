import { configureStore } from "@reduxjs/toolkit";
import toolReducer from "../reducers/toolReducer";

export const store = configureStore({
    reducer: {
        tool: toolReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
