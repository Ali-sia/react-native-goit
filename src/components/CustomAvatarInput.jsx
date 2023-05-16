import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import AddAvatarIcon from '../icons/addAvatar';

export default function AvatarInput({ photo }) {
  return (
    <>
      {/* avatar input */}
      <TouchableOpacity style={styles.imageInput} activeOpacity={0.8}>
        <TouchableOpacity
          style={[styles.addImageIcon, photo && styles.deleteImageIcon]}
          activeOpacity={0.8}
          onPress={() => Alert.alert('add photo')}
        >
          <AddAvatarIcon stroke={photo ? '#E8E8E8' : '#FF6C00'} />
        </TouchableOpacity>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
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

    // fill: '#E8E8E8',
    // stroke: '#E8E8E8',
  },
});
