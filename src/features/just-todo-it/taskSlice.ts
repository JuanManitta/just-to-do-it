import { createSlice } from '@reduxjs/toolkit'
import { createTask } from '../../models/task';
import { Task } from '../../types/taskType';

const initialState: Task[] = []



export const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers:{

        addTask:(state, action) =>{
            const {title, description, tag} = action.payload
            const task = createTask(title, description, tag)
            state.push(task)
        },

        deleteTask:(state, action) =>{
            throw new Error('no implementado')
        }
        

    }

})


export const {addTask, deleteTask} = taskSlice.actions

export default taskSlice.reducer