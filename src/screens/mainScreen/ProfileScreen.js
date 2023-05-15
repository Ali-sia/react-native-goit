import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

export default function Profile() {
  return (
    <View style={styles.containerUnder}>
      <ImageBackground
        source={require('../../../assets/images/RegisterLoginBG.png')}
        style={styles.background}
      >
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            {/* avatar input */}
            <TouchableOpacity style={styles.imageInput} activeOpacity={0.8}>
              <TouchableOpacity
                style={styles.imageInputIcon}
                activeOpacity={0.8}
                onPress={() => Alert.alert('add photo')}
              >
                <Text style={styles.lineVertical}></Text>
                <Text style={styles.lineHorizontal}></Text>
              </TouchableOpacity>
            </TouchableOpacity>

            <Text style={styles.title}>Реєстрація</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  containerUnder: {
    flex: 1,
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
    // paddingTop: Constants.statusBarHeight,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    fontStyle: 'robotoRegular',
  },
  container: {
    flex: 0.75,
    paddingTop: 92,
    paddingBottom: 45,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  title: {
    fontFamily: 'robotoMedium',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    color: '#212121',
    marginBottom: 32,
  },

  imageInput: {
    height: 120,
    width: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    position: 'absolute',
    top: '-13%',
  },
  imageInputIcon: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#FF6C00',
    borderRadius: 50,
    borderWidth: 1,
    position: 'absolute',
    bottom: '10%',
    right: '-10%',
  },
  lineVertical: {
    height: 1,
    width: 13,
    backgroundColor: '#FF6C00',
    transform: [{ rotate: '90deg' }],
  },
  lineHorizontal: {
    height: 1,
    width: 13,
    backgroundColor: '#FF6C00',
  },
});
