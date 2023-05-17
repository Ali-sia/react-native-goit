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

import PostList from '../../components/Post/PostList';

export default function Home() {
  const navigation = useNavigation();

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
          <PostList />
        </View>
        {/* <Footer /> */}
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
