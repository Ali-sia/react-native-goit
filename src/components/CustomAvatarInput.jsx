import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import AddAvatarIcon from '../icons/addAvatar';
import * as ImagePicker from 'expo-image-picker';

export default function AvatarInput({ avatar, setAvatar = null }) {
  const pickImageAsync = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <>
      {/* avatar input */}
      <TouchableOpacity style={styles.imageInput} activeOpacity={0.8}>
        {avatar && (
          <Image style={styles.image} source={{ uri: avatar }}></Image>
        )}
        <TouchableOpacity
          style={[styles.addImageIcon, avatar && styles.deleteImageIcon]}
          activeOpacity={0.8}
          onPress={() => {
            if (setAvatar) pickImageAsync();
          }}
        >
          <AddAvatarIcon stroke={avatar ? '#E8E8E8' : '#FF6C00'} />
        </TouchableOpacity>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  image: { height: '100%', width: '100%', borderRadius: 16 },
  imageInput: {
    height: 120,
    width: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    position: 'absolute',
    top: '-15%',
  },
  addImageIcon: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    position: 'absolute',
    bottom: '10%',
    right: '-10%',
  },
  deleteImageIcon: {
    transform: [{ rotate: '45deg' }],
  },
});
