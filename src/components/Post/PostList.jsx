import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native';

import Post from './Post';

import postExample1 from '../../../assets/images/postExample1.png';
import postExample2 from '../../../assets/images/postExample2.png';
import postExample3 from '../../../assets/images/postExample3.png';

const commentsFake = [
  { author: 'ffff', text: 'super photo' },
  { author: 'aaaa', text: 'perfecto' },
  { author: 'rrrr', text: '!!!!! incredible!!!!!!!!!!!' },
];
const likesFake = 0;
const postsFake = [
  {
    postId: '1',
    postImg: postExample1,
    postName: 'Ліс',
    comments: commentsFake,
    likes: likesFake,
    postLocation: 'Ukraine',
  },
  {
    postId: '2',
    postImg: postExample2,
    postName: 'Лxfgxfvxvxіс',
    comments: commentsFake,
    likes: likesFake,
    postLocation: 'Ukraine',
  },
  {
    postId: '3',
    postImg: postExample3,
    postName: 'fffffffffffffffffff',
    comments: commentsFake,
    likes: likesFake,
    postLocation: 'Italy',
  },
];

export default function PostList() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          data={postsFake}
          renderItem={({ item }) => (
            <Post
              postImg={item.postImg}
              postName={item.postName}
              comments={item.comments}
              likes={item.likes}
              postLocation={item.postLocation}
            />
          )}
          keyExtractor={item => item.postId}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    width: '100%',
  },
});
