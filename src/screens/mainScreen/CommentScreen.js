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
// import { useNavigation, useRoute } from '@react-navigation/native';
import postExample2 from '../../../assets/images/postExample2.png';

import CommentList from '../../components/Comment/CommentList';
import ArrowUpIcon from '../../icons/arrowUp';

export default function Comment() {
  // const {
  //   params: { postImg, comments },
  // } = useRoute();
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  function handleCloseKeyboard() {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={() => handleCloseKeyboard()}>
      <View style={styles.container}>
        <Image style={styles.image} source={postExample2}></Image>
        <CommentList />
        <View style={styles.containerFooter}>
          <View>
            <TextInput
              placeholder="Коментувати..."
              placeholderTextColor="#BDBDBD"
              style={styles.commentInput}
            />
            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={() => alert('send comment')}
              activeOpacity={0.8}
            >
              <ArrowUpIcon stroke={'#ffffff'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // paddingVertical: 32,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  image: {
    borderRadius: 8,
    width: '100%',
    marginBottom: 32,
  },
  containerFooter: {
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  commentInput: {
    position: 'relative',
    height: 50,
    padding: 16,

    fontFamily: 'robotoMedium',
    fontSize: 16,
    lineHeight: 19,

    backgroundColor: '#F6F6F6',
    color: '#212121',

    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 100,
  },
  iconWrapper: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    width: 34,
    height: 34,
    backgroundColor: '#FF6C00',
    borderRadius: 17,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
