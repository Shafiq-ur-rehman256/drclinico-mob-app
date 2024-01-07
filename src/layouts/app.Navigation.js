import GetStartedNav from "./getStarted.Navigation";
import MainNavigation from "./main.Navigation";
import RegistrationNav from "./registration.Navigation";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeStack" component={GetStartedNav} />
        <Stack.Screen name="RegisterStack" component={RegistrationNav} />
        <Stack.Screen name="MainStack" component={MainNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
  export default AppNavigator;