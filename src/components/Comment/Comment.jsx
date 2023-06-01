import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

import { getUser } from '../../redux/auth/authSelector';
import { useSelector } from 'react-redux';

function convertFirebaseDate(firebaseDate) {
  const milliseconds =
    firebaseDate.seconds * 1000 + firebaseDate.nanoseconds / 1e6;
  const date = new Date(milliseconds);
  const formattedDate = date.toLocaleString(); // Example format: 6/30/2023, 12:00:11 AM
  return formattedDate;
}

export default function Comment({ authorAvatar, authorId, text, data }) {
  const convertedData = convertFirebaseDate(data);

  const { userId } = useSelector(getUser);

  const isPostAuthor = authorId === userId ? true : false;
  console.log('---> ~ Comment ~ isPostAuthor:', isPostAuthor);

  return (
    <View style={styles.comment}>
      <View style={styles.avatarHolder}>
        {/* <Image source={{ uri: imgUri }} style={styles.authorAvatar, , {[isPostAuthor ? 'marginLeft' : 'marginRight']: 16}]} /> */}
      </View>
      <View style={styles.commentWrapper}>
        <Text style={styles.commentAuthor}>{text}</Text>
        <Text
          style={[
            styles.commentDate,
            { textAlign: isPostAuthor ? 'left' : 'right' },
          ]}
        >
          {convertedData}
        </Text>
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
