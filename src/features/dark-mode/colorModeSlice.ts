import { createSlice } from '@reduxjs/toolkit';

const initialState = 'light'

export const colorModeSlice = createSlice({
    name: 'colorMode',
    initialState,
    reducers:{

        changeColormode(state, action){
            return action.payload
        } 
    }
})

export const { changeColormode } = colorModeSlice.actions

