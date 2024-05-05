export const api_routes = {

    doctor: {
        sign_up: '/doctor/signup',
        verifyOtp: '/doctor/verify-otp',
        sign_in: '/doctor/authenticate',
        active_list: '/doctor/active/list',
        setAvailableSlots: '/doctor/set/available_slots',
        availableSlots: '/doctor/available_slots'
    },
    patient: {
        sign_up: '/patient/signup',
        verifyOtp: '/patient/verify-otp',
        sign_in: '/patient/authenticate'
    }


}