import React from 'react';
import AppNavigator from './src/layouts/app.Navigation';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text, View, Image, Pressable, TextInput, StatusBar } from 'react-native';

export default function  App() {
  
  const [fontsLoaded] = useFonts({
    'Gilroy-SemiBold': require('./assets/fonts/gilroy/Gilroy-SemiBold.ttf'),
    'Gilroy-Bold': require('./assets/fonts/gilroy/Gilroy-Bold.ttf'),
    'Gilroy-Medium': require('./assets/fonts/gilroy/Gilroy-Medium.ttf'),
    'Gilroy-Light': require('./assets/fonts/gilroy/Gilroy-Light.ttf')
  });


  if (!fontsLoaded) {
    return (
      <View></View>
    );
  }

  return (
     
        <AppNavigator ></AppNavigator>

    
  );
}
