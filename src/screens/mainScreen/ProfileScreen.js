import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import AvatarInput from '../../components/CustomAvatarInput';
import LogOutBtn from '../../components/LogOutBtn';
import PostList from '../../components/Post/PostList';

import { getUser } from '../../redux/auth/authSelector';
import { useSelector, useDispatch } from 'react-redux';
// import { updateUserProfile } from '../../redux/auth/authSlice';

// import uploadPhotoToServer from '../../helpers/uploadPhoto';

import { dbFirestore } from '../../firebase/config';
import { collection, onSnapshot, where, query } from 'firebase/firestore';

export default function Profile() {
  // const dispatch = useDispatch();
  const { userId, nickName, userAvatar } = useSelector(getUser);
  const [userPosts, setUserPosts] = useState([]);
  const [commentsCount, setCommentsCount] = useState({});
  // const [changedAvatar, setChangedAvatar] = useState('');

  const getCommentsCount = async postId => {
    try {
      const commentsRef = collection(dbFirestore, `posts/${postId}/comments`);
      const queryRef = query(commentsRef);
      const unsubscribe = onSnapshot(queryRef, querySnapshot => {
        const commentsCount = querySnapshot.docs.length;
        setCommentsCount(prev => ({ ...prev, [postId]: commentsCount }));
      });
      return () => unsubscribe();
    } catch (error) {
      console.log(error);
      setCommentsCount(prev => ({ ...prev, [postId]: 0 }));
    }
  };
  async function getUserPosts() {
    try {
      const userPostsRef = collection(dbFirestore, 'posts');
      const queryRef = query(userPostsRef, where('userId', '==', userId));
      const unsubscribe = onSnapshot(queryRef, querySnapshot => {
        const userPosts = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUserPosts(userPosts);

        if (userPosts && userPosts.length > 0) {
          userPosts.forEach(post => {
            getCommentsCount(post.id.toString());
          });
        }
      });
      return () => unsubscribe();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserPosts();
  }, []);

  // useEffect(() => {
  //   updateProfilePhoto(changedAvatar);
  // }, [changedAvatar]);

  // async function updateProfilePhoto(photo) {
  //   const userAvatar = await uploadPhotoToServer(photo);
  //   console.log('---> ~ updateProfilePhoto ~ userAvatar:', userAvatar);
  //   dispatch(updateUserProfile(userAvatar));
  // }

  return (
    <View style={styles.containerUnder}>
      <ImageBackground
        source={require('../../../assets/images/RegisterLoginBG.png')}
        style={styles.background}
      >
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            {/* avatar input */}
            <AvatarInput avatar={userAvatar} />
            <View style={styles.logOutBtn}>
              <LogOutBtn />
            </View>

            <Text style={styles.title}>{nickName}</Text>
            <View style={styles.containerPosts}>
              <PostList posts={userPosts} commentsCount={commentsCount} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
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
    flex: 0.75,
    paddingTop: 92,
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
  logOutBtn: {
    position: 'absolute',
    top: 22,
    right: 0,
  },
  containerPosts: {
    width: '100%',
    flex: 1,
  },
});
