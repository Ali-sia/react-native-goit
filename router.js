import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import Register from './src/screens/auth/RegistrationScreen';
import Login from './src/screens/auth/LoginScreen';
import Home from './src/screens/mainScreen/HomeScreen';
import Profile from './src/screens/mainScreen/ProfileScreen';
import Create from './src/screens/mainScreen/CreateScreen';

export default function useRoute(isAuth) {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="LoginScreen">
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="LoginScreen"
          component={Login}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="RegistrationScreen"
          component={Register}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator>
      <MainTab.Screen
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
              activeOpacity={0.8}
              onPress={() => navigation.navigate('LoginScreen')}
            >
              <Image
                source={require('./assets/images/icons/logout.png')}
              ></Image>
            </TouchableOpacity>
          ),
        })}
      />
      <MainTab.Screen name="CreateScreen" component={Create} />
      <MainTab.Screen name="ProfileScreen" component={Profile} />
    </MainTab.Navigator>
  );
}

const styles = StyleSheet.create({
  logoutIcon: {
    marginRight: 16,
  },
});

{
  /* <AuthStack.Navigator initialRouteName="LoginScreen">
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="LoginScreen"
            component={Login}
          />
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="RegistrationScreen"
            component={Register}
          /> */
}
{
  /* <AuthStack.Screen
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
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('LoginScreen')}
                >
                  <Image
                    source={require('./assets/images/icons/logout.png')}
                  ></Image>
                </TouchableOpacity>
              ),
            })}
          /> */
}
{
  /* </AuthStack.Navigator> */
}
