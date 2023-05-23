import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import locationIcon from '../../../assets/images/icons/location.png';
import commentsIcon from '../../../assets/images/icons/message.png';
import commentsFullIcon from '../../../assets/images/icons/messageFull.png';
import likesIcon from '../../../assets/images/icons/thumbsUp.png';
import likesFullIcon from '../../../assets/images/icons/thumbsUpFull.png';

//TODO
// add button to likes and comments
export default function Post({ post }) {
  console.log('---> ~ Post ~ post:', post);
  const {
    postId,
    postTitle,
    likes,
    imgUri,
    locationName,
    locationData,
    comments,
  } = post;
  return (
    <View
      style={styles.post}
      //   onPress={() => {
      //     alert('crete new POST');
      //   }}
      //   activeOpacity={0.8}
    >
      {/* TODO переробити іконки */}
      <Image source={{ imgUri }} style={styles.image}></Image>
      <Text style={styles.title}>{postTitle}</Text>
      <View style={styles.additionContainer}>
        <View style={styles.reactionHolder}>
          <TouchableOpacity
            style={styles.commentsHolder}
            onPress={() => {
              navigation.navigate('CommentScreen', {
                prevScreen: 'HomeScreen',
                params: { postImg, comments },
              });
            }}
          >
            <Image
              style={styles.commentsIcon}
              source={comments.length === 0 ? commentsIcon : commentsFullIcon}
            ></Image>
            <Text style={comments.length === 0 && styles.commentsCount}>
              {comments.length}
            </Text>
          </TouchableOpacity>
          <View style={styles.likesHolder}>
            <Image
              style={styles.likesIcon}
              source={likes === 0 ? likesIcon : likesFullIcon}
            ></Image>
            <Text style={likes === 0 && styles.likesCount}>{likes}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.locationHolder}
          onPress={() => {
            navigation.navigate('MapScreen', {
              prevScreen: 'HomeScreen',
            });
          }}
        >
          <Image style={styles.locationIcon} source={locationIcon}></Image>
          <Text style={styles.locationText}>{locationName}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    padding: 16,
    width: '100%',
    color: '#212121',
    fontSize: 16,
    lineHeight: 19,
  },
  additionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  title: {
    marginVertical: 8,
    fontFamily: 'robotoMedium',
  },
  reactionHolder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentsHolder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  commentsIcon: {
    marginRight: 6,
  },
  commentsCount: {
    color: '#BDBDBD',
  },
  likesHolder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesIcon: {
    marginRight: 6,
  },
  likesCount: {
    color: '#BDBDBD',
  },
  locationHolder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    marginRight: 4,
  },
  locationText: {
    textDecorationLine: 'underline',
  },
});
