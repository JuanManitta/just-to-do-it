import { createSlice } from '@reduxjs/toolkit'
import { createTask } from '../../models/task';
import { Task } from '../../types/taskType';
import { v4 as uuid } from 'uuid';

const initialState: Task[] = [
    {
        id: uuid(),
        title:'Contratar a Juan',
        description:'Tengo que mandarle un mensaje a Juan para contratarlo porque la verdad es que es un gran desarrollador',
        date: new Date().toLocaleString(),
        tag:'Life'
    },
    {
        id: uuid(),
        title:'Contratar a Juan',
        description:'Esto es un recordatorio de que si no contraté a Juan, deberia hacerlo. Esta es una tarea urgente',
        date: new Date().toLocaleString(),
        tag:'Life'
    },
    {
        id: uuid(),
        title:'Armar los test con Jest',
        description:'Tengo que armar los test con Jest para el proyecto de React, es un garron pero hay que hacerlo',
        date: new Date().toLocaleString(),
        tag:'Work'
    },
]



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
            const id = action.payload
            const newTaskList: Task[] = state.filter( task => task.id !== id)
            return newTaskList
        },

        editTask:(state, action) =>{

            const {id, title, description, tag} = action.payload
            const task = state.find( (task) => task.id === id)
            
            if(task){
                task.title = title
                task.description = description
                task.tag = tag
            };
        },
    }

})


export const {addTask, deleteTask, editTask} = taskSlice.actions

export default taskSlice.reducer