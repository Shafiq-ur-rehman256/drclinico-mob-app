import { createNativeStackNavigator } from "@react-navigation/native-stack";
import mainPage from "../pages/mainPage";

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="main" component={mainPage} />
    </Stack.Navigator>
  );
}
