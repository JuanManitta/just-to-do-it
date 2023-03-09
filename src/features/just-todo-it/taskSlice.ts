import { createSlice } from '@reduxjs/toolkit'
import { Task } from '../../types/taskType';




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
    }
});


export const {
    addTask, 
    deleteTask, 
    editTask, 
    filterAndSearchTasks, 
    loadingTasks,
    handleSkeletonLoading
    } = taskSlice.actions

