import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import AvatarInput from '../../components/CustomAvatarInput';
import LogOutBtn from '../../components/LogOutBtn';
import PostList from '../../components/PostList';

export default function Profile({ name, email, posts }) {
  name = 'Natali Romanova';
  return (
    <View style={styles.containerUnder}>
      <ImageBackground
        source={require('../../../assets/images/RegisterLoginBG.png')}
        style={styles.background}
      >
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            {/* avatar input */}
            <AvatarInput />
            <View style={styles.logOutBtn}>
              <LogOutBtn />
            </View>

            <Text style={styles.title}>{name}</Text>
            <View style={styles.containerPosts}>
              <PostList />
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
  logOutBtn: {
    position: 'absolute',
    top: 22,
    right: 0,
  },
  containerPosts: { width: '100%', flex: 1 },
});
