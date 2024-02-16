import { createNativeStackNavigator } from "@react-navigation/native-stack";
import patientHome from "../pages/Patient/patientHome";
import patientDonation from "../pages/Patient/patientDontation";

const Stack = createNativeStackNavigator();

export default function PatientNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="patientStack"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="patient_home" component={patientHome} />
      <Stack.Screen name="patient_donate" component={patientDonation} />
    </Stack.Navigator>
  );
}
