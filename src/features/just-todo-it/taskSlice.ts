import { createSlice } from '@reduxjs/toolkit'
import { createTask } from '../../models/task';
import { Task } from '../../types/taskType';
import { v4 as uuid } from 'uuid';
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from '../../utilities/localStorage';

const initialState: Task[] = getTasksFromLocalStorage() || [];



export const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers:{

        addTask:(state, action) =>{
            const {title, description, tag} = action.payload
            const task = createTask(title, description, tag)
            state.push(task)
            saveTasksToLocalStorage(state);
        },

        deleteTask:(state, action) =>{
            const id = action.payload
            const newTaskList: Task[] = state.filter( task => task.id !== id)
            state= newTaskList
            saveTasksToLocalStorage(state);

            return newTaskList
        },

        editTask:(state, action) =>{

            const {id, title, description, tag} = action.payload
            
            const updatedTasksList = state.map( task => {
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
            state = updatedTasksList;
            saveTasksToLocalStorage(state);
            return state;
        },

        // searchTask:(state, action) =>{

        //     const title = action.payload
        //     const originalState = getTasksFromLocalStorage() || initialState;
        //     const newTaskList = originalState.filter( task => 
        //         task.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
        //     );
        //     return newTaskList;
        // },

        filterAndSearchTasks:(state, action) =>{

            const { filter, title } = action.payload
                    
            if(filter === 'all'){
               const originalState = getTasksFromLocalStorage() || initialState;
               const searchedTasks = originalState.filter( task =>
                task.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
             );
             return searchedTasks;

            } else {

            const originalState = getTasksFromLocalStorage() || initialState;
            const filteredTasks = originalState.filter( task => 
                task.tag.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
            );
            const searchedTasks = filteredTasks.filter( task =>
                task.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
            );
                return searchedTasks;
            }           
        }
    }
});


export const {addTask, deleteTask, editTask, filterAndSearchTasks} = taskSlice.actions

export default taskSlice.reducer