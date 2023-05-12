// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Keyboard,
} from 'react-native';

import CustomInput from '../components/CustomInput';

export default function Register() {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  function handleCloseKeyboard() {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  }

  function handleFormSubmit() {
    console.log({ login, email, password });
    setLogin('');
    setEmail('');
    setPassword('');
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {/* avatar input */}
        <TouchableOpacity style={styles.imageInput}>
          <TouchableOpacity
            style={styles.imageInputIcon}
            onPress={() => Alert.alert('add photo')}
          >
            <Text style={styles.lineVertical}></Text>
            <Text style={styles.lineHorizontal}></Text>
          </TouchableOpacity>
        </TouchableOpacity>
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
            onPress={() => setIsPasswordHidden(!isPasswordHidden)}
          >
            <Text style={styles.showPasswordText}>Показати</Text>
          </TouchableOpacity>
        </View>

        {/* register btn */}
        <TouchableOpacity
          style={styles.formButton}
          onPress={() => {
            handleFormSubmit();
            handleCloseKeyboard();
          }}
        >
          <Text style={styles.btnText}>Зареєструватися</Text>
        </TouchableOpacity>
        {/* link to login */}
        <TouchableOpacity
          style={styles.formLink}
          onPress={() => Alert.alert('goto login')}
        >
          <Text style={styles.linkText}>Вже маєте аккаунт? Увійти</Text>
        </TouchableOpacity>
      </View>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    fontStyle: 'robotoRegular',
  },
  container: {
    flex: 0.65,
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 45,

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
  showPasswordText: { fontSize: 16, lineHeight: 19, color: '#1B4371' },
  formButton: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    paddingTop: 16,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 16,
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
  linkText: { fontSize: 16, lineHeight: 19, color: '#1B4371' },
  imageInput: {
    height: 120,
    width: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    position: 'absolute',
    top: '-15%',
  },
  imageInputIcon: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#FF6C00',
    borderRadius: 50,
    borderWidth: 1,
    position: 'absolute',
    bottom: '10%',
    right: '-10%',
  },
  lineVertical: {
    height: 1,
    width: 13,
    backgroundColor: '#FF6C00',
    transform: [{ rotate: '90deg' }],
  },
  lineHorizontal: { height: 1, width: 13, backgroundColor: '#FF6C00' },
});
