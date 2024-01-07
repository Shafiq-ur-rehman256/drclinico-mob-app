import * as Font from 'expo-font';
import { useState } from 'react';
import AppNavigator from './src/layouts/app.Navigation';

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
    <AppNavigator></AppNavigator>
  );
}
