import GetStartedNav from "./getStarted.Navigation";
import MainNavigation from "./main.Navigation";
import RegistrationNav from "./registration.Navigation";
import EmergencyNavigation from "./emergency.Navigation";
import PatientNaviation from "./patient.Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// const loadFonts = async () => {
//   await Font.loadAsync({
//     'Gilroy-SemiBold': require('../../assets/fonts/gilroy/Gilroy-SemiBold.ttf'),
//     'Gilroy-Bold': require('../../assets/fonts/gilroy/Gilroy-Bold.ttf'),
//     'Gilroy-Medium': require('../../assets/fonts/gilroy/Gilroy-Medium.ttf'),
//     'Gilroy-Light': require('../../assets/fonts/gilroy/Gilroy-Light.ttf')
//   });

// };

const AppNavigator = () => {
  // loadFonts()

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeStack"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HomeStack" component={GetStartedNav} />
        <Stack.Screen name="RegisterStack" component={RegistrationNav} />
        <Stack.Screen name="MainStack" component={MainNavigation} />
        <Stack.Screen name="EmergencyStack" component={EmergencyNavigation} />
        <Stack.Screen name="PatientStack" component={PatientNaviation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
