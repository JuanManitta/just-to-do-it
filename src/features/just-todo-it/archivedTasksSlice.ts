import { Task } from '../../types/taskType';
import { createSlice } from '@reduxjs/toolkit';
import { createTask } from '../../models/task';

const initialState : Task[] = [];


const archivedTaslSlice = createSlice({
    name: 'archivedTasksSlice',
    initialState,
    reducers:{

        addArchivedTask:(state, action) =>{
            const {title, description, tag} = action.payload
            const task = createTask(title, description, tag)
            state.push(task)
        },

        deleteArchivedTask:(state, action) =>{
            const id = action.payload
            const newTaskList: Task[] = state.filter( task => task.id !== id)
            return newTaskList
        }
    }
})

export const {addArchivedTask, deleteArchivedTask} = archivedTaslSlice.actions

export default archivedTaslSlice.reducer