import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

import CameraIcon from '../../icons/camera';

export default function CreatePost() {
  const [postTitle, setPostTitle] = useState('');
  const [location, setLocation] = useState('');

  const [isPhotoLoad, setIsPhotoLoad] = useState(false);
  const [photo, setPhoto] = useState('');

  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

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

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      setPhoto(uri);
      await MediaLibrary.createAssetAsync(uri);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => handleCloseKeyboard()}>
      <View style={styles.container}>
        {/* <View style={styles.photoContainer}> */}
        <Camera style={styles.photoContainer} type={type} ref={setCameraRef}>
          {photo && <Image source={{ uri: photo }} />}

          <View style={styles.iconPhotoContainer}>
            <TouchableOpacity onPress={takePhoto} style={styles.inner}>
              <CameraIcon fill={'#BDBDBD'} />
            </TouchableOpacity>
          </View>
        </Camera>
        {/* </View> */}
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
    position: 'relative',

    width: '100%',
    backgroundColor: '#F6F6F6',
    height: 240,
    borderRadius: 15,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // preview: {
  //   position: 'absolute',
  //   zIndex: 1,
  //   top: 0,
  //   left: 0,

  //   width: '100%',
  //   height: '100%',
  //   backgroundColor: '#f0f',
  // },
  // camera: {
  //   width: '100%',
  //   height: '100%',
  // },
  iconPhotoContainer: {
    position: 'relative',
    zIndex: 100,
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -12 }, { translateY: -12 }],
    width: '100%',
    height: '100%',
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
