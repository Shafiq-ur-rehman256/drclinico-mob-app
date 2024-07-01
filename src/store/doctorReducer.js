import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllConvoForDocs, getAllPatientChat, sendMessageToPatient, startAppointmentByDoctor } from "../services/api.doctor..service";

// THUNKS START HERE
export const triggerStartAppointment = createAsyncThunk(
    'appointment/start',
    async (payload, thunkAPI) => {
        const response = await startAppointmentByDoctor(payload);
        return response.data;
    },
);

export const GetAllConvoForDocs = createAsyncThunk(
    '/doctor/conversations',
    async () =>{
        const response = await getAllConvoForDocs();
        return response.data;
    }
)

export const SendMessageToPatient = createAsyncThunk(
    'doctor/sendMessage',
    async (payload) =>{
        const response = await sendMessageToPatient(payload);
        return response.data;
    }
)

export const GetAllPatientChat = createAsyncThunk(
    'doctor/chat/patient_id',
    async (pateint_id) => {
        // console.log(pateint_id,'doctor/chat/patient_id');
        const response = await getAllPatientChat(pateint_id);
        return response.data;
    }
)

// THUNKS END HERE

const doctorState = {
    chatScreen: {
        conversations: [],
        selected_Conversation: null,
        open_chat: []
    }

};



const doctorSlice = createSlice({
    name: "doctorState",
    initialState: doctorState,
    reducers: {

        selectChat: (state, action) =>{
            state.chatScreen.selected_Conversation = action.payload;
        },
        deSelectChat: (state, action) => {
            state.chatScreen.selected_Conversation = null;
        },

        setDocNewMessage: (state, action) =>{
            state.chatScreen.open_chat = [...state.chatScreen.open_chat, action.payload];
        }

    },
    extraReducers: builder => {
        builder.addCase(triggerStartAppointment.fulfilled, (state, action) => {

            state.chatScreen.selected_Conversation = action.payload;
            state.chatScreen.conversations.push(action.payload);
            console.log("sdad",state);

        })

        builder.addCase(GetAllConvoForDocs.fulfilled, (state, action) =>{
            state.chatScreen.conversations = action.payload;
        })

        builder.addCase(SendMessageToPatient.fulfilled, (state, action) =>{
            console.log("NEW MESSAGE", action.payload.message);
            // state.chatScreen.open_chat = [...state.chatScreen.open_chat, action.payload];
        })

        builder.addCase(GetAllPatientChat.fulfilled, (state, action) =>{
            state.chatScreen.open_chat =  action.payload;
        })

    }
})


export default doctorSlice.reducer

export const { selectChat,deSelectChat, setDocNewMessage } = doctorSlice.actions