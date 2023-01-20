//Imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pageManagement } from "../../interfaces/interfaces";

const initialState: pageManagement = {
    selectedId: "0",
    siteCategory: ""
}

const pageSlice = createSlice({
    name: 'pageslicer',
    initialState,
    reducers: {
        siteSelected(state, action: PayloadAction<pageManagement>){
            return {
                ...state,
                selectedId: action.payload.selectedId,
                siteCategory: action.payload.siteCategory
            }
        }
    }
});

export const { siteSelected } = pageSlice.actions

export default pageSlice.reducer