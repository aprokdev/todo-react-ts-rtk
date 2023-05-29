import { configureStore } from '@reduxjs/toolkit';
import hideCompletedReducer from '~app-state/hideCompleted/hideCompletedSlice';
import sortingTitleReducer from '~app-state/sortingTitle/sortingTitleSlice';
import todosReducer from '~app-state/todos/todosSlice';

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        sortingTitle: sortingTitleReducer,
        hideCompleted: hideCompletedReducer,
    },
    devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
