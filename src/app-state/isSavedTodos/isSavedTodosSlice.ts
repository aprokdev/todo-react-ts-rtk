import { createSlice } from '@reduxjs/toolkit';
import { LS_TODOS_LIST_NAME } from '../todos/todosSlice';

export type isSavedTodosState = boolean;

export interface isSavedTodosActionPayload {
    value: boolean;
}

export const isSavedTodosSlice = createSlice({
    name: 'isSavedTodos',
    initialState: () => {
        const LSTodos = JSON.parse(localStorage.getItem(LS_TODOS_LIST_NAME)) || [];
        return Array.isArray(LSTodos) ? Boolean(LSTodos.length) : false;
    },
    reducers: {
        clearLocalStorage: () => {
            console.log('yes');

            localStorage.clear();
            console.log('yes2');
            return false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { clearLocalStorage } = isSavedTodosSlice.actions;

export default isSavedTodosSlice.reducer;
