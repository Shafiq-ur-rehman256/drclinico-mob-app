import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import GetStarted from './getStarted';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function GetStartedNav() {

    return (

        <NavigationContainer >
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
                <Stack.Screen name="Home" component={GetStarted} />
            </Stack.Navigator>
        </NavigationContainer>

    )

}