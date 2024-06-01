import axios from 'axios';
import { config } from '../config/config';
import { api_routes } from '../config/api.routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

axios.defaults.baseURL = config.baseUrl;


const getPatientAuthHeaders = async() => {

    const user = JSON.parse(await AsyncStorage.getItem('user'))

    const headers = {
        'Authorization': user.token
    }

    return headers;

}

const getDoctorAuthHeaders = async() => {

    const user = JSON.parse(await AsyncStorage.getItem('user'))

    const headers = {
        'Authorization': user.token
    }

    return headers;

}

// DOCTOR-START

export const doctorSignUp = async (payload) => {
    try {
        console.log(payload);
        
        const headers = {}
        let response = await axios.post(api_routes.doctor.sign_up, payload, {headers: headers});
        console.log(response.data);
        return response.data;

    } catch (error) {
        console.log(error);
        const Error = {
            code: 0,
            message: error
        }
        return Error;
    }

}

export const docVerifyOtp = async(payload) => {
    try {
        
        const headers = {}
        let response = await axios.post(api_routes.doctor.verifyOtp, payload, {headers: headers});
        console.log(response.data);
        return response.data;
        
    } catch (error) {
        const Error = {
            code: 0,
            message: error
        }
        return Error;
    }
}

export const doctorAuthenticate = async(payload) => {
    try {
        console.log(payload);
        const headers = {}
        let response = await axios.put(api_routes.doctor.sign_in, payload, {headers: headers});
        console.log("====================================",response.data);
        return response.data;
        
    } catch (error) {
        console.log(error);
        const Error = {
            code: 0,
            message: error
        }
        return Error;
    }
}

export const activeDoctorList = async() => {
    try {
        
        const headers = await getPatientAuthHeaders()
        let response = await axios.get(api_routes.doctor.active_list, {headers: headers});
        console.log("====================================",response.data);
        return response.data;

    } catch (error) {
        console.log(error);
        const Error = {
            code: 0,
            message: error
        }
        return Error;
    }
}

export const updateAvailableSlot = async(payload) =>{
    try {
        
        const headers = await getDoctorAuthHeaders();
        console.log();
        let response = await axios.post(api_routes.doctor.setAvailableSlots, payload, {headers: headers});
        console.log("====================================",response.data);
        return response.data;

    } catch (error) {
        console.log(error);
        const Error = {
            code: 0,
            message: error
        }
        return Error;
    }
}

export const getAvailableSlot = async() =>{
    try {
        
        const headers = await getDoctorAuthHeaders();
        console.log("getAvailableSlot", headers);
        let response = await axios.get(api_routes.doctor.availableSlots, {headers: headers});
        console.log("====================================",response.data);
        return response.data;

    } catch (error) {
        console.log(error);
        const Error = {
            code: 0,
            message: error
        }
        return Error;
    }
}

// DOCTOR-END

// PATIENT-START

export const registerPatient = async(payload) =>{
    try {
        
        const headers = {}
        let response = await axios.post(api_routes.patient.sign_up, payload, {headers: headers});
        console.log("====================================",response);
        return response.data;

    } catch (error) {
        console.log(error.response.data);
        const Error = {
            code: 0,
            msg: error.response.data.message
        }
        return Error;
    }
}

export const verifyOtpPatient = async(payload) =>{
    try {
        
        const headers = {}
        let response = await axios.put(api_routes.patient.verifyOtp, payload, {headers: headers});
        // console.log("====================================",response);
        return response.data;

    } catch (error) {
        // console.log(error.response.data);
        const Error = {
            code: 0,
            msg: error.response.data.message
        }
        return Error;
    }
}

export const patientAuthenticate = async(payload) => {
    try {
        console.log(payload);
        const headers = {}
        let response = await axios.put(api_routes.patient.sign_in, payload, {headers: headers});
        console.log("====================================",response.data);
        return response.data;
        
    } catch (error) {
        
        const Error = {
            code: 0,
            msg: error.response.data.message
        }
        return Error;
    }
}

export const allDoctorListForPatient = async() => {
    try {
        
        const headers = await getPatientAuthHeaders()
        let response = await axios.get(api_routes.appointments.patient_doctors, {headers: headers});
        return response.data;
        

    } catch (error) {
        const Error = {
            code: 0,
            msg: error.response.data.message
        }
        return Error;
    }
}

export const getDotorAvailiblitySlots = async(doctor_id) => {
    try {
        
        const headers = await getPatientAuthHeaders()
        let response = await axios.get(`${api_routes.appointments.doctor_slots}/${doctor_id}`, {headers: headers});
        return response.data;
        

    } catch (error) {
        const Error = {
            code: 0,
            msg: error.response.data.message
        }
        return Error;
    }
}




// PATIENT-END