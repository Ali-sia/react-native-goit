import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';

import PostList from '../../components/Post/PostList';

import { dbFirestore } from '../../firebase/config';
import { collection, onSnapshot, query } from 'firebase/firestore';

export default function Home({ route }) {
  const [posts, setPosts] = useState([]);

  async function getAllPosts() {
    try {
      await onSnapshot(collection(dbFirestore, 'posts'), data => {
        const posts = data.docs.map(doc => ({ ...doc.data(), postId: doc.id }));
        setPosts(posts);
      });
    } catch (error) {
      console.log(error.massage);
      Alert.alert('Try again');
    }
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  function handleCloseKeyboard() {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={() => handleCloseKeyboard()}>
      <View style={styles.containerUnder}>
        <View style={styles.containerUser}>
          <View style={styles.containerAvatar}>
            <Image
              source={require('../../../assets/images/avatarExample.png')}
            ></Image>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com </Text>
          </View>
        </View>

        <View style={styles.containerPosts}>
          <PostList posts={posts} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  containerUnder: {
    flex: 10,
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
  },
  containerUser: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
  },
  containerAvatar: {
    width: 60,
    height: 60,
    backgroundColor: '#FF6C00',
    borderRadius: 16,
    marginRight: 8,
    overflow: 'hidden',
  },
  userInfo: {},
  userName: {
    fontFamily: 'robotoBold',
    fontSize: 13,
    lineHeight: 15,
    color: '#212121',
  },
  userEmail: {
    fontFamily: 'robotoRegular',
    fontSize: 11,
    lineHeight: 13,
    color: '#212121cc',
  },
  containerPosts: { flex: 8 },
});
