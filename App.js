import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import GetStartedNav from './src/layouts/get-started/getStarted.Navigation';
import * as Font from 'expo-font';
import { useState } from 'react';


const fetchFonts = () => {
  return Font.loadAsync({
  'gilroy-semibold': require('./assets/fonts/gilroy/Gilroy-SemiBold.ttf'),
  // 'roboto-italic': require('./assets/fonts/Roboto-Italic.ttf'),
  // 'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf')
  });
  };

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Gilroy-SemiBold': require('./assets/fonts/gilroy/Gilroy-SemiBold.ttf'),
      // 'custom-bold': require('./assets/fonts/CustomFont-Bold.ttf'),
      // Add more fonts if needed
    });

    setFontsLoaded(true);
  };

  // Load fonts before rendering the app
  if (!fontsLoaded) {
    loadFonts();
    return null;
  }


  return (
   
      <GetStartedNav></GetStartedNav>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
