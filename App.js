import React, { useCallback } from 'react';
import AppNavigator from './src/layouts/app.Navigation';
import { useFonts } from 'expo-font';
import { View, ScrollView } from 'react-native';
import { Provider } from 'react-redux'
import store from './src/store/store';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { CustomSnackBar } from './src/components/snackBac';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function App() {

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
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigator ></AppNavigator>
        <CustomSnackBar></CustomSnackBar>
      </SafeAreaProvider>
    </Provider>


  );
}
