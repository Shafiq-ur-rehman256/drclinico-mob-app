import axios from 'axios';
import { config } from '../config/config';
import { api_routes } from '../config/api.routes';

axios.defaults.baseURL = config.baseUrl;


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

// PATIENT-END