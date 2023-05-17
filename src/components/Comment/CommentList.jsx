import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';

import Comment from './Comment';

const commentsFake = [
  {
    commentId: '4',
    author: 'ffff',
    text: 'super photo',
    createAt: 'Mon Jun 9 2020 08:40:00 GMT+0000',
  },
  {
    commentId: '5',
    author: 'aaaa',
    text: 'perfecto',
    createAt: 'Mon Jun 9 2020 08:40:00 GMT+0000',
  },
  {
    commentId: '6',
    author: 'rrrr',
    text: '!!!!! incredible!!!!!!!!!!!',
    createAt: 'Mon Jun 9 2020 08:40:00 GMT+0000',
  },
];

export default function CommentList() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          data={commentsFake}
          renderItem={({ item }) => (
            <Comment
              author={item.author}
              text={item.text}
              data={item.createAt}
            />
          )}
          keyExtractor={item => item.commentId}
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
