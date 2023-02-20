import { Task } from '../../types/taskType';
import { createSlice } from '@reduxjs/toolkit';
import { createTask } from '../../models/task';
import { getCompletedTasksFromLocalStorage, saveCompletedTasksToLocalStorage } from '../../utilities/localStorage';
import { Description } from '@mui/icons-material';

const initialState : Task[] = getCompletedTasksFromLocalStorage() || [] ;


export const completedTasksSlice = createSlice({
    name: 'completedTasksSlice',
    initialState,
    reducers:{

        addCompletedTask:(state, action) =>{
            const {title, description, tag, done} = action.payload
            if(done === true) return
            const task = createTask(title, description, tag)
            task.done = true
            state.push(task)
            saveCompletedTasksToLocalStorage(state)
        },

        deleteCompletedTask:(state, action) =>{
            console.log(action.payload);
            
            const { id } = action.payload
            const newTaskList: Task[] = state.filter( task => task.id !== id)
            saveCompletedTasksToLocalStorage(newTaskList)
            return newTaskList
        },

        undoCompleteTask:(state, action) =>{
            console.log(action.payload);
            
            const { title, description } = action.payload
            const newTaskList: Task[] = state.filter( task => task.title !== title && task.description !== description)
            saveCompletedTasksToLocalStorage(newTaskList)
            return newTaskList
        }
    }
})

export const {addCompletedTask, deleteCompletedTask, undoCompleteTask} = completedTasksSlice.actions

