import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import patientRegistration from '../pages/patientRegistration';
import patientOtp from '../pages/patientOtp';
import doctorRegistration from '../pages/doctorRegistration';
// import main from '../pages/mainPage';
import mainPage from '../pages/mainPage';



const Stack = createNativeStackNavigator();

export default function MainNavigation() {

    return (

  
            <Stack.Navigator initialRouteName="main" screenOptions={{headerShown: false}} >
                <Stack.Screen name="main" component={mainPage} />
            </Stack.Navigator>
      

    )

}