export const api_routes = {

    doctor: {
        sign_up: '/doctor/signup',
        verifyOtp: '/doctor/verify-otp',
        sign_in: '/doctor/authenticate',
        active_list: '/doctor/active/list',
        setAvailableSlots: '/doctor/set/available_slots',
        availableSlots: '/doctor/available_slots',
        convoList: '/chats/doctor/conversations',
        sendMessage: '/chats/doctor/sendMessage',
        patient_chats: '/chats/doctor/chat',
    },
    patient: {
        sign_up: '/patient/signup',
        verifyOtp: '/patient/verify-otp',
        sign_in: '/patient/authenticate',
        convoList: '/chats/patient/conversations',
        sendMessage: '/chats/patient/sendMessage',
        doctor_chats: '/chats/patient/chat',
    },

    appointments: {
        patient_doctors: '/appointment/patient/doctor/list',
        doctor_slots: '/appointment/available_slots',
        patient_bookAppointment: '/appointment/book',
        patientAppointments: '/appointment/doctor/patient_appointments',
        doctor_start_appointment: '/appointment/start',
        
    }


}