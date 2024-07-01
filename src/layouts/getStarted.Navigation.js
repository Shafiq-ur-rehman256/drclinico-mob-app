import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import GetStarted from '../pages/getStarted';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SelectRegistration } from '../pages/selectRegistration';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';


const Stack = createNativeStackNavigator();

export default function GetStartedNav({ navigation }) {

    const getFirstOpen = async () => {
        const firstOpen = await AsyncStorage.getItem('first_open');
        // console.log("===============================?",firstOpen );
        if (firstOpen) {
            navigation.navigate("HomeStack", {
                screen: "select_registration"
              });
        }
    }

    async function autoRedirectHome(){

        const user = JSON.parse(await AsyncStorage.getItem('user'));
        // console.log(user);
        // console.log("==",user?.accessControl);
        if (user?.token) {
            navigation.navigate("MainStack", {
                screen: "main",
                params: { accessControl: user?.accessControl },
              });
        }

    }

    useEffect(()=>{
        getFirstOpen()
        autoRedirectHome()
    }, [])
    
    return (

  
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
                <Stack.Screen name="Home" component={GetStarted} />
                <Stack.Screen name="select_registration" component={SelectRegistration} />
            </Stack.Navigator>
       

    )

}