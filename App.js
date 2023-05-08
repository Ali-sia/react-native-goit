import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';

import { useFonts } from 'expo-font';

import Register from './assets/Screens/RegistrationScreen';
import Login from './assets/Screens/LoginScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    robotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    robotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
    robotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/images/RegisterLoginBG.png')}
        style={styles.background}
      >
        <Register />
        {/* <Login /> */}
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
