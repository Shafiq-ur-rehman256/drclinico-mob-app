import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllConvoForDocs, getAllConvoForPatient, getAllDoctorChat, sendMessageToDoctor, startAppointmentByDoctor } from "../services/api.doctor..service";

// THUNKS START HERE

export const GetAllConvoForPatient = createAsyncThunk(
    '/patient/conversations',
    async () =>{
        const response = await getAllConvoForPatient();
        return response.data;
    }
)


export const SendMessageToDoctor = createAsyncThunk(
    'patient/sendMessage',
    async (payload) =>{
        console.log("EMIT PAyLOAD",payload);
        const response = await sendMessageToDoctor(payload);
        return response.data;
    }
)


export const GetAllDoctorChat = createAsyncThunk(
    'doctor/chat/patient_id',
    async (doctor_id) => {
        // console.log(pateint_id,'doctor/chat/patient_id');
        const response = await getAllDoctorChat(doctor_id);
        return response.data;
    }
)

// THUNKS END HERE

const patientState = {
    chatScreen: {
        conversations: [],
        selected_Conversation: null,
        open_chat: []
    }

};



const patientSlice = createSlice({
    name: "patientState",
    initialState: patientState,
    reducers: {

        selectChat: (state, action) =>{
            state.chatScreen.selected_Conversation = action.payload;
        },
        deSelectChat: (state, action) => {
            state.chatScreen.selected_Conversation = null;
        },
        setPatNewMessage: (state, action) =>{
            state.chatScreen.open_chat = [...state.chatScreen.open_chat, action.payload];
        }

    },
    extraReducers: builder => {
       
        builder.addCase(GetAllConvoForPatient.fulfilled, (state, action) =>{
            state.chatScreen.conversations = action.payload;
        })

        builder.addCase(SendMessageToDoctor.fulfilled, (state, action)=>{
            console.log("NEW MESSAGE", action.payload.message);
        })

        builder.addCase(GetAllDoctorChat.fulfilled, (state, action)=>{
            state.chatScreen.open_chat =  action.payload;
        })

    }
})


export default patientSlice.reducer

export const { selectChat,deSelectChat,setPatNewMessage } = patientSlice.actions