import React, { useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.footerInner}>
        <View style={styles.iconNav}>
          <Image source={require('../../assets/images/icons/menu.png')}></Image>
        </View>
        <View style={[styles.iconNav, styles.iconAdd]}>
          <Image source={require('../../assets/images/icons/add.png')}></Image>
        </View>
        <View style={styles.iconNav}>
          <Image source={require('../../assets/images/icons/user.png')}></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    borderTopWidth: 0.5,
    borderTopColor: '#00000030',

    borderTopStyle: 'solid',
    // elevation: 1, // Adjust this value as needed
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: -0.5,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 0,
  },
  footerInner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 9,
  },
  iconNav: {},
  iconAdd: {
    borderRadius: 20,
    paddingVertical: 13,
    paddingHorizontal: 28,
    backgroundColor: '#FF6C00',
    marginHorizontal: 31,
  },
});
