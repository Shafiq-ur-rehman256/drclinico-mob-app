import { createNativeStackNavigator } from "@react-navigation/native-stack";
import patientHome from "../pages/Patient/patientHome";
import patientBookAppointment from "../pages/Patient/patientBookAppointment";
import patientDontation from "../pages/Patient/patientDontation";
import AvailiblitySlots from "../pages/Doctor/AvailibiltySlots";

const Stack = createNativeStackNavigator();

export default function PatientNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="patient_home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="patient_home" component={patientHome} />
      <Stack.Screen name="patient_donate" component={patientDontation} />
      <Stack.Screen name="book_appointment" component={patientBookAppointment} />
      <Stack.Screen name="slots" component={AvailiblitySlots} />
    </Stack.Navigator>
  );
}
