// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { useDispatch } from 'react-redux';
import { authSignUpUser } from '../../redux/auth/authOperation';

import CustomInput from '../../components/CustomInput';
import AvatarInput from '../../components/CustomAvatarInput';

export default function Register() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [userAvatar, setUserAvatar] = useState('');
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  function handleCloseKeyboard() {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  }

  async function handleFormSubmit() {
    const newUser = { login, email, password, userAvatar };

    dispatch(authSignUpUser(newUser));

    setLogin('');
    setEmail('');
    setPassword('');
  }

  return (
    <TouchableWithoutFeedback onPress={() => handleCloseKeyboard()}>
      <View style={styles.containerUnder}>
        <ImageBackground
          source={require('../../../assets/images/RegisterLoginBG.png')}
          style={styles.background}
        >
          <View style={styles.mainContainer}>
            <View style={styles.container}>
              {/* TODO create function to load photo */}
              <AvatarInput avatar={userAvatar} setAvatar={setUserAvatar} />
              {/* page title */}
              <Text style={styles.title}>Реєстрація</Text>
              {/* login input */}
              <CustomInput
                value={login}
                setValue={setLogin}
                placeholder={'Логін'}
                onSubmitEditing={handleFormSubmit}
                keyboardShow={setIsShowKeyboard}
              />
              {/* email input */}
              <CustomInput
                value={email}
                setValue={setEmail}
                placeholder={'Електронна пошта'}
                onSubmitEditing={handleFormSubmit}
                keyboardShow={setIsShowKeyboard}
              />
              {/* password */}
              <View style={styles.passwordContainer}>
                {/* password input */}
                <CustomInput
                  value={password}
                  setValue={setPassword}
                  placeholder={'Пароль'}
                  onSubmitEditing={handleFormSubmit}
                  secureTextEntry={isPasswordHidden}
                  keyboardShow={setIsShowKeyboard}
                />
                {/* show password btn */}
                <TouchableOpacity
                  style={styles.showPassword}
                  activeOpacity={0.8}
                  onPress={() => setIsPasswordHidden(!isPasswordHidden)}
                >
                  <Text style={styles.showPasswordText}>Показати</Text>
                </TouchableOpacity>
              </View>

              {/* register btn */}
              <TouchableOpacity
                style={styles.formButton}
                activeOpacity={0.8}
                onPress={() => {
                  handleFormSubmit();
                  handleCloseKeyboard();
                  // navigation.navigate('HomeScreen');
                }}
              >
                <Text style={styles.btnText}>Зареєструватися</Text>
              </TouchableOpacity>
              {/* link to login */}
              <TouchableOpacity
                style={styles.formLink}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('LoginScreen')}
              >
                <Text style={styles.linkText}>Вже маєте аккаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  containerUnder: {
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
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    fontStyle: 'robotoRegular',
  },
  container: {
    flex: 0.65,
    paddingTop: 92,
    paddingBottom: 45,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  title: {
    fontFamily: 'robotoMedium',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    color: '#212121',

    marginBottom: 32,
  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
  },
  showPassword: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  showPasswordText: {
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
  formButton: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 32,
    marginTop: 27,
    marginBottom: 16,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 19,

    color: '#FFFFFF',
  },
  formLink: {},
  linkText: {
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
});
