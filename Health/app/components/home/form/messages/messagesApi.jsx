
import { createAsyncThunk } from "@reduxjs/toolkit";
import { submitChoices } from "../../../../api/api";



//aysnchronous thunk to add choices of user to add choices 
export const addUserChoices = createAsyncThunk(
    'options/addUserChoices',

    async(data, thunkAPI) => {
        try{
            const response = await submitChoices(global.key, data.choices);
            const json = await response.json();
            return json;
        }
        catch(err){
        return thunkAPI.rejectWithValue({ error: err.message })
        }
    }
);