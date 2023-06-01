import React, { useState, useEffect } from 'react';

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
import { useRoute } from '@react-navigation/native';

import { useSelector } from 'react-redux';
import { getUser } from '../../redux/auth/authSelector';
import { dbFirestore } from '../../firebase/config';
import { collection, addDoc, doc, onSnapshot } from 'firebase/firestore';

import CommentList from '../../components/Comment/CommentList';
import ArrowUpIcon from '../../icons/arrowUp';

export default function Comment({ route }) {
  const {
    params: {
      imgUri,
      // comments,
      postId,
    },
  } = useRoute();

  const { userId, nickName } = useSelector(getUser);
  const [newComment, setNewComment] = useState('');
  const [allComments, setAllComments] = useState(null);

  const getAllComments = async () => {
    try {
      const docRef = doc(dbFirestore, 'posts', postId);

      onSnapshot(collection(docRef, 'comments'), data => {
        const comments = data.docs.map(doc => ({
          ...doc.data(),
        }));
        setAllComments(comments);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllComments();
  }, []);

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  function handleCloseKeyboard() {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  }

  async function sendComment() {
    const docRef = doc(dbFirestore, 'posts', postId);
    await addDoc(collection(docRef, 'comments'), {
      newComment,
      userId,
      nickName,
      postedDate: new Date(),
    });

    setNewComment('');
  }

  return (
    <TouchableWithoutFeedback onPress={() => handleCloseKeyboard()}>
      <View style={styles.container}>
        <View style={styles.imageHolder}>
          <Image style={styles.image} source={{ uri: imgUri }} />
        </View>
        <CommentList comments={allComments} />
        <View style={styles.containerFooter}>
          <View>
            <TextInput
              placeholder="Коментувати..."
              placeholderTextColor="#BDBDBD"
              style={styles.commentInput}
              onChangeText={text => setNewComment(text)}
              value={newComment}
            />
            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={() => sendComment()}
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
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  imageHolder: {
    height: 240,
    width: '100%',

    backgroundColor: '#f0f',
    borderRadius: 10,
    overflow: 'hidden',

    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: '100%',
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
