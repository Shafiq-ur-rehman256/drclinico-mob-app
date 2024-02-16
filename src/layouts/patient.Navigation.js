import { createNativeStackNavigator } from "@react-navigation/native-stack";
import patientHome from "../pages/Patient/patientHome";

const Stack = createNativeStackNavigator();

export default function PatientNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="patientStack"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="patient_home" component={patientHome} />
    </Stack.Navigator>
  );
}