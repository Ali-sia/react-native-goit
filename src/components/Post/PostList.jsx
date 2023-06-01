import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Text } from 'react-native';

import Post from './Post';

export default function PostList({ posts, commentsCount }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {posts && (
          <FlatList
            data={posts}
            renderItem={({ item }) => (
              <Post post={item} commentsCount={commentsCount} />
            )}
            keyExtractor={(item, index) => {
              index.toString();
            }}
          />
        )}
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
