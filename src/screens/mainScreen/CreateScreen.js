import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import CameraIcon from '../../icons/camera';
import CustomInput from '../../components/CustomInput';

export default function CreatePost() {
  const [postTitle, setPostTitle] = useState('');
  const [location, setLocation] = useState('');
  const [isPhotoLoad, setIsPhotoLoad] = useState(false);

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  function handleCloseKeyboard() {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  }

  function handleFormSubmit() {
    console.log({ postTitle, location });
    setPostTitle('');
    setLocation('');
  }

  const isFieldsFull = location != '' && postTitle != '';
  console.log('---> ~ CreatePost ~ isFieldsFull:', isFieldsFull);

  return (
    <TouchableWithoutFeedback onPress={() => handleCloseKeyboard()}>
      <View style={styles.container}>
        <View style={styles.photoContainer}>
          <View style={styles.iconPhotoContainer}>
            <CameraIcon fill={'#BDBDBD'} />
          </View>
        </View>
        <Text style={styles.textPhotoContainer}>
          {!isPhotoLoad ? 'Завантажте фото' : 'Редагувати фото'}
        </Text>

        <TextInput
          style={styles.inputStyles}
          onChangeText={text => setPostTitle(text)}
          value={postTitle}
          placeholder={'Назва'}
          onFocus={() => {
            setIsPhotoLoad(true);
          }}
        ></TextInput>
        <TextInput
          style={styles.inputStyles}
          onChangeText={text => setLocation(text)}
          value={location}
          placeholder={'Місцевість'}
          onFocus={() => {
            setIsPhotoLoad(true);
          }}
        ></TextInput>
        <TouchableOpacity
          style={[styles.formButton, isFieldsFull && styles.fullFormButton]}
          activeOpacity={0.8}
          onPress={() => {
            handleFormSubmit();
          }}
        >
          <Text style={[styles.btnText, isFieldsFull && styles.fullBtnText]}>
            Опублікувати
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  photoContainer: {
    width: '100%',
    backgroundColor: '#F6F6F6',
    height: 240,
    borderRadius: 8,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconPhotoContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#ffffff',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPhotoContainer: {
    color: '#BDBDBD',
    marginTop: 8,
    marginBottom: 32,
  },
  inputStyles: {
    fontFamily: 'robotoRegular',
    fontSize: 16,
    lineHeight: 19,

    height: 50,
    marginBottom: 16,

    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  formButton: {
    marginTop: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#F6F6F6',
    borderRadius: 100,
    paddingVertical: 16,
  },

  fullFormButton: {
    backgroundColor: '#FF6C00',
  },
  btnText: {
    color: '#BDBDBD',
    fontFamily: 'robotoRegular',
    fontSize: 16,
    lineHeight: 19,
  },
  fullBtnText: {
    color: '#ffffff',
  },
});
