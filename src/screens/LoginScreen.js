import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  function handleCloseKeyboard() {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  }

  function handleFormSubmit() {
    console.log({ email, password });
    setEmail('');
    setPassword('');
  }

  return (
    <TouchableWithoutFeedback onPress={() => handleCloseKeyboard()}>
      <View style={styles.containerUnder}>
        <ImageBackground
          source={require('../../assets/images/RegisterLoginBG.png')}
          style={styles.background}
        >
          <View style={styles.mainContainer}>
            <View style={styles.container}>
              {/* page title */}
              <Text style={styles.title}>Увійти</Text>
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

              {/* login btn */}
              <TouchableOpacity
                style={styles.formButton}
                onPress={() => {
                  handleFormSubmit();
                  navigation.navigate('HomeScreen');
                }}
              >
                <Text style={styles.btnText}>Увійти</Text>
              </TouchableOpacity>
              {/* link to register */}
              <TouchableOpacity
                style={styles.formLink}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('RegistrationScreen')}
              >
                <Text style={styles.linkText}>
                  Немає аккаунту? Зареєструватися
                </Text>
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
    // paddingTop: Constants.statusBarHeight,
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
    flex: 0.55,
    paddingTop: 32,
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
  lineHorizontal: {
    height: 1,
    width: 13,
    backgroundColor: '#FF6C00',
  },
});
