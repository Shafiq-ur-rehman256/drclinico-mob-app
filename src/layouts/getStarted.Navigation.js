import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import GetStarted from '../pages/getStarted';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SelectRegistration } from '../pages/selectRegistration';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';


const Stack = createNativeStackNavigator();

export default function GetStartedNav({ navigation }) {

    const naviageToPatientHome = async() =>{

        const patient_auth = await AsyncStorage.getItem('patient_auth')
        if (patient_auth) {
            navigation.navigate("MainStack", {
                screen: "main",
                params: { accessControl: 'patient' },
              });
        }

    }

    useEffect(async()=>{
        await naviageToPatientHome()
    }, [])

    return (

  
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
                <Stack.Screen name="Home" component={GetStarted} />
                <Stack.Screen name="select_registration" component={SelectRegistration} />
            </Stack.Navigator>
       

    )

}