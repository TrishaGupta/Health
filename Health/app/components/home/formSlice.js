import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import firebase from "firebase/app";
import 'firebase/database';
import database from '../../../firebase';
import { submitUser } from '../../api/api';
import { add } from 'react-native-reanimated';
import { useDispatch,useSelector } from 'react-redux';

const initialState = {
    firstName : "",
    lastName : "",
    contactNumber: ""
};

export const userReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'user/addUser':
            return action.payload;
        case 'user/deleteUser':
            return state.filter(object => object.id !== action.payload.id);

        case 'user/editFirstName':
            return {...state, firstName: action.payload.firstName};
        
        case 'user/editLastName':
            return {...state, lastName: action.payload.lastName};

        case 'user/editContactNumber':
            return {...state, contactNumber: action.payload.contactNumber};
    
        default:
            return state;
    }
};

export const addUser = createAsyncThunk(
    'users/addUser',

    async(data, thunkAPI) => {
        
        try{
            const response = await submitUser(data.id, data.firstName, data.lastName, data.contactNumber, data.choices);
            const json = await response.json();
            //console.log(json);
            return json;
        }
        catch(err){
        return thunkAPI.rejectWithValue({ error: err.message })
        }
    }
);

const userSlice = createSlice({
    name: 'users',
    initialState: {
        user: null,
        isLoading: false,
        error: null
      },
      reducers: {},
      extraReducers: {
        [addUser.pending]: state => {
          state.isLoading = true;
          state.error = null;
        },
        [addUser.fulfilled]: (state, action) => {
          state.user = action.payload;
          state.isLoading = false;
          state.error = null;
        },
        [addUser.rejected]: (state, action) => {
          state.user = null;
          state.isLoading = false;
          state.error = action.error.message;
        }
      }
});
export default userSlice.reducer;

