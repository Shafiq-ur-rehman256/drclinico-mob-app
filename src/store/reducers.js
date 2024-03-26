import { createSlice } from "@reduxjs/toolkit"


const appState = {
    main: {
        SnackBar: {
            show: false,
            message: ''
        } 
    },
    homeScreem: {
        data: [1,2,3]
    },
};

const appSlice = createSlice({
    name: "state",
    initialState: appState,
    reducers: {

        setSnackBar: (state, action)=>{
            state.main.SnackBar = action.payload;
        }

    }
})


export default appSlice.reducer

export const { setSnackBar } = appSlice.actions