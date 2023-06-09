import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { submitChoices } from "../../../../api/api";


//options temporarily hard coded 
export const options = ['Emotional Well Being', 
                        'Physical Health', 'Relationships', 'Career', 
                        'Education', 'Dating', 'Family', 'Loss'];
//colors
export const colorChoose = '#d5a9eb';
export const colorNotChoosen ='#00FFFF';

//initial state of slice 
export const initialState = options.map(key => ({
    name: key,
    isSelect:false,
    color: colorNotChoosen
}));



//slice created for options
export const optionsSlice = createSlice({
    name: 'options',
    initialState: initialState,
    reducers:{
        addChoice: (state, action) =>{
           const index = state.findIndex(item => item.name === action.payload.name);
           state[index].isSelect = true;
           state[index].color = state[index].color === colorChoose? colorNotChoosen: colorChoose;
        },

        removeChoice: (state, action) =>{
            const index = state.findIndex(item => item.name === action.payload.name);
           state[index].isSelect = false;
           state[index].color = state[index].color === colorChoose? colorNotChoosen: colorChoose;
        }
    }
});

//actions for reducer
export const {addChoice, removeChoice} = optionsSlice.actions;

//selectors for the options 
export const optionsSelector = (state) => state.options;
