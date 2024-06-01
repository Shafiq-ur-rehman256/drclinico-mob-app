import { createNativeStackNavigator } from "@react-navigation/native-stack";
import doctorInfo from "../pages/Emergency/doctorInfo";
import emergencyHome from "../pages/emergencyHome";

const Stack = createNativeStackNavigator();

export default function EmergencyNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="emergencyStack"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="emergency_home" component={emergencyHome} />
      <Stack.Screen name="doctor_info" component={doctorInfo} />
    </Stack.Navigator>
  );
}
