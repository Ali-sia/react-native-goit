import { useState } from 'react';
import 'react-native-gesture-handler';

import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import useRoute from './routing/router';
// import useRoute from './routing/routerRight';

import { auth } from './src/firebase/config';

export default function App() {
  const [user, setUser] = useState(null);

  auth.onAuthStateChanged(user => setUser(user));

  const routing = useRoute(user);

  const [fontsLoaded] = useFonts({
    robotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    robotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
    robotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}
