// import { useState } from 'react';

import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { useFonts } from 'expo-font';

import Register from './src/screens/RegistrationScreen';
import Login from './src/screens/LoginScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    robotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    robotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
    robotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  // const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  // function handleCloseKeyboard() {
  //   setIsShowKeyboard(true);
  //   Keyboard.dismiss();
  // }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          source={require('./assets/images/RegisterLoginBG.png')}
          style={styles.background}
        >
          <Register />
          {/* <Login /> */}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
    // paddingTop: Constants.statusBarHeight,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
