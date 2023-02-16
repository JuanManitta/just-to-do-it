import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from '../features/just-todo-it/taskSlice'
import archivedTaslSlice from '../features/just-todo-it/archivedTasksSlice';


export const store = configureStore({
    reducer:{
        task: tasksReducer,
        archivedTasks: archivedTaslSlice
    },
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch