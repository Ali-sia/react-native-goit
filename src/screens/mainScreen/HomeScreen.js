import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Post from '../../components/Post';
import Footer from '../../components/Footer';

import postExample1 from '../../../assets/images/postExample1.png';
import postExample2 from '../../../assets/images/postExample2.png';
import postExample3 from '../../../assets/images/postExample3.png';

export default function Home() {
  const navigation = useNavigation();

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  function handleCloseKeyboard() {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  }

  const commentsFake = [
    { author: 'ffff', text: 'super photo' },
    { author: 'aaaa', text: 'perfecto' },
    { author: 'rrrr', text: '!!!!! incredible!!!!!!!!!!!' },
  ];
  const likes = 0;

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
          <Post
            postImg={postExample1}
            postName="Лес"
            comments={commentsFake}
            likes={likes}
            postLocation=" Ukraine"
          />
          <Post
            postImg={postExample2}
            postName="Закат на Черном море"
            comments={commentsFake}
            likes={likes}
            postLocation="Ukraine"
          />
          <Post
            postImg={postExample3}
            postName="Старый домик в Венеции"
            comments={commentsFake}
            likes={likes}
            postLocation="Italy"
          />
        </View>
        <Footer />
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
