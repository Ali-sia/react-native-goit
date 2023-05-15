// import { useState } from 'react';
import 'react-native-gesture-handler';

import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

import useRoute from './router';

export default function App() {
  const routing = useRoute({});

  const [fontsLoaded] = useFonts({
    robotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    robotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
    robotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
