import { createNativeStackNavigator } from "@react-navigation/native-stack";
import patientHome from "../pages/Patient/patientHome";
import patientDonation from "../pages/Patient/patientDontation";
import doctorMenuItem from "../pages/Doctor/doctorMenuItem";

const Stack = createNativeStackNavigator();

export default function PatientNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="doctorStack"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="doctor_menu" component={doctorMenuItem} />
    </Stack.Navigator>
  );
}
