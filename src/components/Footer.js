import React, { useState } from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.footerInner}>
        <TouchableOpacity
          style={styles.iconNav}
          onPress={() => alert('press on menu')}
        >
          <Image source={require('../../assets/images/icons/menu.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconNav, styles.iconAdd]}
          onPress={() => alert('adding new post')}
        >
          <Image source={require('../../assets/images/icons/add.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconNav}
          onPress={() => alert('goto user page')}
        >
          <Image source={require('../../assets/images/icons/user.png')}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopWidth: 0.5,
    borderTopColor: '#4D4D4D',
    borderTopStyle: 'solid',
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
