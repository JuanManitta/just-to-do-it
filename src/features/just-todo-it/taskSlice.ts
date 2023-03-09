import { createSlice } from '@reduxjs/toolkit'
import { createTask } from '../../models/task';
import { Task } from '../../types/taskType';
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from '../../utilities/localStorage';




const tasks:Task[] = []

export const taskSlice = createSlice({
    name: 'taskSlice',
    initialState:{
        tasks,
        activeFilter: 'All',
        isLoadingTasks: true,
        searcherWord: ''
    },

    reducers:{

        loadingTasks:(state, action) =>{

            const tasksArray:Task[] = action.payload
            tasksArray.forEach( task => {
                const exists = state.tasks.some( dbTask => dbTask.id === task.id );
                if( !exists ){
                    state.tasks.push( task )
                }
            });
        },

        handleSkeletonLoading:(state) =>{
            state.isLoadingTasks = false;
        },


        addTask:(state, action) =>{
            const task = action.payload;
            state.tasks.push(task)
        },

        deleteTask:(state, {payload}) =>{
            state.tasks = state.tasks.filter( task => task.id !== payload.id)
        },

        editTask:(state, {payload}) =>{

            state.tasks = state.tasks.map( task => {
                if (task.id === payload.id){
                    return payload;
                }
                return task
            });
        },

        filterAndSearchTasks:(state, action) =>{

            const { filter, title } = action.payload

            state.activeFilter = filter;
            state.searcherWord = title;

             
        },

        completeTask:(state, action) =>{
            const id = action.payload
            const updatedTasksList = state.tasks.map( task => {
                if(task.id === id){
                    return {
                        ...task,
                        done: !task.done
                    }
                }
                return task
            });
            state.tasks = updatedTasksList;
            saveTasksToLocalStorage(state.tasks);
            return state;
        }
    }
});


export const {
    addTask, 
    deleteTask, 
    editTask, 
    filterAndSearchTasks, 
    completeTask, 
    loadingTasks,
    handleSkeletonLoading
    } = taskSlice.actions

