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

export default function CommentList({ comments }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          data={comments}
          renderItem={({ item }) => (
            <Comment
              authorId={item.userId}
              text={item.newComment}
              data={item.postedDate}
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
