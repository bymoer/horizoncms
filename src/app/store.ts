import { configureStore } from "@reduxjs/toolkit";
import windmillReducer from '../features/windmills/windmillSlice';
import solarReducer from '../features/solar/solarSlice';
import pageSlice from "../features/sites/pageSlice";

export const store =  configureStore({
    reducer: {
        windmills: windmillReducer,
        solar: solarReducer,
        pages: pageSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch