import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

import locationIcon from '../../assets/images/icons/location.png';
import commentsIcon from '../../assets/images/icons/message.png';
import commentsFullIcon from '../../assets/images/icons/messageFull.png';
import likesIcon from '../../assets/images/icons/thumbsUp.png';
import likesFullIcon from '../../assets/images/icons/thumbsUpFull.png';

export default function Post({
  postImg,
  postName,
  comments,
  likes,
  postLocation,
}) {
  return (
    <View
      style={styles.post}
      //   onPress={() => {
      //     alert('crete new POST');
      //   }}
      //   activeOpacity={0.8}
    >
      <Image source={postImg} style={styles.image}></Image>
      <Text style={styles.title}>{postName}</Text>
      <View style={styles.additionContainer}>
        <View style={styles.reactionHolder}>
          <View style={styles.commentsHolder}>
            <Image
              style={styles.commentsIcon}
              source={comments.length === 0 ? commentsIcon : commentsFullIcon}
            ></Image>
            <Text style={comments.length === 0 && styles.commentsCount}>
              {comments.length}
            </Text>
          </View>
          <View style={styles.likesHolder}>
            <Image
              style={styles.likesIcon}
              source={likes === 0 ? likesIcon : likesFullIcon}
            ></Image>
            <Text style={likes === 0 && styles.likesCount}>{likes}</Text>
          </View>
        </View>
        <View style={styles.locationHolder}>
          <Image style={styles.locationIcon} source={locationIcon}></Image>
          <Text style={styles.locationText}>{postLocation}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    padding: 16,
    width: '100%',
    color: '#212121',
  },
  additionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  title: {
    marginVertical: 8,
    fontFamily: 'robotoMedium',
    fontSize: 16,
    lineHeight: 19,
  },
  reactionHolder: {
    display: 'flex',
    flexDirection: 'row',
  },
  commentsHolder: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 24,
  },
  commentsIcon: {
    marginRight: 6,
  },
  commentsCount: { color: '#BDBDBD' },
  likesHolder: {
    display: 'flex',
    flexDirection: 'row',
  },
  likesIcon: { marginRight: 6 },
  likesCount: { color: '#BDBDBD' },
  locationHolder: {
    display: 'flex',
    flexDirection: 'row',
  },
  locationIcon: { marginRight: 4 },
  locationText: {},
});
