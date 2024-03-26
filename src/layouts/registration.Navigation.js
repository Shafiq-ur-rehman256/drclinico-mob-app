import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import patientRegistration from '../pages/patientRegistration';
import patientOtp from '../pages/patientOtp';
import doctorRegistration from '../pages/doctorRegistration';
import doctorSignIn from '../pages/doctorSignIn';
import patientSignIn from '../pages/patientSignIn';


const Stack = createNativeStackNavigator();

export default function RegistrationNav() {

    return (

  
            <Stack.Navigator initialRouteName="patient_signup" screenOptions={{headerShown: false}} >
                <Stack.Screen name="patient_signup" component={patientRegistration} />
                <Stack.Screen name="patient_otp" component={patientOtp} />
                <Stack.Screen name="patient_login" component={patientSignIn} />
                <Stack.Screen name="doctor_signup" component={doctorRegistration} />
                <Stack.Screen name="doctor_login" component={doctorSignIn} />
            </Stack.Navigator>
      

    )

}