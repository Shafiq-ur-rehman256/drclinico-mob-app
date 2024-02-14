import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import patientRegistration from "../pages/patientRegistration";
import patientOtp from "../pages/patientOtp";
import doctorRegistration from "../pages/doctorRegistration";
import doctorInfo from "../pages/Emergency/doctorInfo";

const Stack = createNativeStackNavigator();

export default function EmergencyNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="emergencyStack"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="doctor_info" component={doctorInfo} />
    </Stack.Navigator>
  );
}