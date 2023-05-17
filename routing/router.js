import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Register from '../src/screens/auth/RegistrationScreen';
import Login from '../src/screens/auth/LoginScreen';
import Home from '../src/screens/mainScreen/HomeScreen';
import Profile from '../src/screens/mainScreen/ProfileScreen';
import Create from '../src/screens/mainScreen/CreateScreen';
import Comment from '../src/screens/mainScreen/CommentScreen';
import Map from '../src/screens/mainScreen/MapScreen';

import LogOutBtn from '../src/components/LogOutBtn';
import PostsIcon from '../src/icons/posts';
import AddIcon from '../src/icons/add';
import UserIcon from '../src/icons/user';

import { TabBarIcon } from '../src/components/TabBarIcon';

const AuthStack = createStackNavigator();
// const MainTab = createBottomTabNavigator();
const NestedScreen = createStackNavigator();
const Tabs = createBottomTabNavigator();

export function HomeTabs() {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#212121',
        tabBarStyle: {
          height: 58,
          display: 'flex',
          alignItems: 'center',
        },

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
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        component={Home}
        options={({ navigation }) => ({
          title: 'Публікації',

          headerRight: () => <LogOutBtn />,
          //tabs
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <TabBarIcon
                IconComponent={PostsIcon}
                focused={focused}
                size={size}
                color={color}
              />
            );
          },
        })}
      />

      <Tabs.Screen
        name="Створити публікацію"
        component={Create}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <TabBarIcon
                IconComponent={AddIcon}
                focused={focused}
                size={13}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <TabBarIcon
                IconComponent={UserIcon}
                focused={focused}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
}

//home page navigator to open comment screen
const HomeNav = ({ navigation }) => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="Home"
        component={HomeTabs}
        options={{
          headerShown: false,
        }}
      />
      <NestedScreen.Screen
        name="MapScreen"
        component={Map}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#212121',
        }}
      />
      <NestedScreen.Screen
        name="CommentScreen"
        component={Comment}
        options={{
          //   headerBackTitleVisible: false,
          headerTintColor: '#212121',
        }}
      />
    </NestedScreen.Navigator>
  );
};

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
  return <HomeNav />;
}
