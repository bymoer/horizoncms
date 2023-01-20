import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { stateWindmill, stateEnum } from "../../interfaces/interfaces";
import { windmillData } from "../data/fakedata";

const initialState = windmillData;

const windmillSlice = createSlice({
    name: 'windmill',
    initialState,
    reducers: {
        windmillAdded(state, action: PayloadAction<stateWindmill>){
            state.push(action.payload)
        }
    }
})

export const { windmillAdded } = windmillSlice.actions

export default windmillSlice.reducer