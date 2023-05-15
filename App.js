// import { useState } from 'react';
import 'react-native-gesture-handler';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';

import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Register from './src/screens/RegistrationScreen';
import Login from './src/screens/LoginScreen';
import Home from './src/screens/HomeScreen';

const MainStack = createStackNavigator(); // вказує на групу навігаторів

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
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="LoginScreen">
        <MainStack.Screen
          options={{ headerShown: false }}
          name="LoginScreen"
          component={Login}
        />
        <MainStack.Screen
          options={{ headerShown: false }}
          name="RegistrationScreen"
          component={Register}
        />
        <MainStack.Screen
          name="HomeScreen"
          component={Home}
          options={({ navigation }) => ({
            title: 'Публікації',
            headerStyle: {
              backgroundColor: '#ffffff',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 0.5 },
              shadowOpacity: 0.3,
              shadowRadius: 0,
              elevation: 1,
            },
            headerTintColor: '#212121',
            headerTitleStyle: {
              fontFamily: 'robotoMedium',
              fontSize: 17,
              lineHeight: 22,
            },
            headerTitleAlign: 'center',
            headerLeft: () => <View style={{ width: 0 }}></View>,
            headerRight: () => (
              <TouchableOpacity
                style={styles.logoutIcon}
                onPress={() => navigation.navigate('LoginScreen')}
              >
                <Image
                  source={require('./assets/images/icons/logout.png')}
                ></Image>
              </TouchableOpacity>
            ),
          })}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logoutIcon: {
    marginRight: 16,
  },
});
