import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { stateSolar, solarStateEnum } from "../../interfaces/interfaces";
import { solarData } from "../data/fakedata";

const initialState = solarData;

const solarSlice = createSlice({
    name: "solar",
    initialState,
    reducers: {
        solarAdded(state, action: PayloadAction<stateSolar>){
            state.push(action.payload)
        }
    }
})

export const { solarAdded } = solarSlice.actions

export default solarSlice.reducer