import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import GetStarted from '../pages/getStarted';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SelectRegistration } from '../pages/selectRegistration';


const Stack = createNativeStackNavigator();

export default function GetStartedNav() {

    return (

  
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
                <Stack.Screen name="Home" component={GetStarted} />
                <Stack.Screen name="select_registration" component={SelectRegistration} />
            </Stack.Navigator>
       

    )

}