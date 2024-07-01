import {  createSlice } from "@reduxjs/toolkit"


const appState = {
    main: {
        socket: {
            connected: false,
        },
        SnackBar: {
            show: false,
            message: ''
        }
    }

};



const appSlice = createSlice({
    name: "state",
    initialState: appState,
    reducers: {
        setSocketConnection : (state, action) =>{
            state.main.socket.connected = action.payload;
        },
        // snack bar reducers
        setSnackBar: (state, action) => {
            state.main.SnackBar = action.payload;
        },

    }
})


export default appSlice.reducer

export const { setSnackBar, deSelectChat, setSocketConnection } = appSlice.actions