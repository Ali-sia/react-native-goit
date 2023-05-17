import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
//TODO
// add button to likes and comments
export default function Comment({ author, text, data }) {
  return (
    <View style={styles.comment}>
      <View style={styles.avatarHolder}>
        <Image
          // source={{uri: item.userAvatar}}
          style={styles.authorAvatar}
        />
      </View>
      <View style={styles.commentWrapper}>
        <Text style={styles.commentAuthor}>{text}</Text>
        <Text style={styles.commentDate}>{data}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  comment: {
    // padding: 16,
    // width: '100%',
    // flex: 1,
    display: 'flex',
    flexDirection: 'row',
    color: '#212121',
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 24,
  },
  avatarHolder: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#f0f',
    marginRight: 16,
  },
  authorAvatar: {
    // width: 28,
    // height: 28,
  },
  commentWrapper: {
    flex: 1,
    padding: 16,
    backgroundColor: ' rgba(0, 0, 0, 0.03)',
    borderRadius: 16,
  },
  commentAuthor: {
    marginBottom: 8,
    fontFamily: 'robotoRegular',
    fontSize: 13,
    lineHeight: 18,
    color: '#212121',
    // borderRadius: '50%',
  },
  commentDate: {
    fontFamily: 'robotoRegular',
    fontSize: 10,
    lineHeight: 12,
    color: '#BDBDBD',
    textAlign: 'right',
  },
});
