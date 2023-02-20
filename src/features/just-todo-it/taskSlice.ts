import { createSlice } from '@reduxjs/toolkit'
import { createTask } from '../../models/task';
import { Task } from '../../types/taskType';
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from '../../utilities/localStorage';




const initialTasks: Task[] = getTasksFromLocalStorage() || [];


export const taskSlice = createSlice({
    name: 'taskSlice',
    initialState:{
        initialTasks: initialTasks,
        activeFilter: 'All',
    },

    reducers:{

        addTask:(state, action) =>{
            const {title, description, tag} = action.payload
            const task: Task = createTask(title, description, tag )
            state.initialTasks.push(task)
            saveTasksToLocalStorage(state.initialTasks);
        },

        deleteTask:(state, action) =>{
            const id = action.payload
            const origianlTasks = getTasksFromLocalStorage();
            const updatedTasksList = origianlTasks.filter( task => task.id !== id)
            state.initialTasks = updatedTasksList;
            saveTasksToLocalStorage(state.initialTasks);

        },

        editTask:(state, action) =>{

            const {id, title, description, tag} = action.payload
            
            const updatedTasksList = state.initialTasks.map( task => {
                if(task.id === id){
                    return {
                        ...task,
                        title,
                        description,
                        tag
                    }
                }
                return task
            });
            state.initialTasks = updatedTasksList;
            saveTasksToLocalStorage(state.initialTasks);
            return state;
        },

        filterAndSearchTasks:(state, action) =>{

            const { filter, title } = action.payload
            state.activeFilter = filter;
            const origianlTasks = getTasksFromLocalStorage();
            const filteredTasks = origianlTasks.filter( task => {
                if(filter === 'All'){
                    return task.title.toLowerCase().includes(title.toLowerCase())
                }
                return task.tag === filter && task.title.toLowerCase().includes(title.toLowerCase())
            })
            state.initialTasks = filteredTasks;   
        },

        completeTask:(state, action) =>{
            const id = action.payload
            const updatedTasksList = state.initialTasks.map( task => {
                if(task.id === id){
                    return {
                        ...task,
                        done: !task.done
                    }
                }
                return task
            });
            state.initialTasks = updatedTasksList;
            saveTasksToLocalStorage(state.initialTasks);
            return state;
        }
    }
});


export const {addTask, deleteTask, editTask, filterAndSearchTasks, completeTask} = taskSlice.actions

