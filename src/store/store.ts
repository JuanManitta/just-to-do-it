import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from '../features/just-todo-it/taskSlice';
import { completedTasksSlice } from '../features/just-todo-it/completedTasksSlice';
import { colorModeSlice } from '../features/dark-mode/colorModeSlice';
import { authSlice } from "../features/auth/authSlice";


export const store = configureStore({
    reducer:{
        task: taskSlice.reducer,
        completedTasks: completedTasksSlice.reducer,
        colorMode: colorModeSlice.reducer,
        auth: authSlice.reducer,
    },
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch