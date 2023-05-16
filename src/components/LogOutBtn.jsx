import { StyleSheet, TouchableOpacity } from 'react-native';
import LogOutIcon from '../icons/logout';

export default function LogOutBtn() {
  return (
    <>
      <TouchableOpacity
        style={styles.logoutIcon}
        activeOpacity={0.8}
        // onPress={() => navigation.navigate('LoginScreen')}
      >
        <LogOutIcon stroke={'#BDBDBD'} />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  logoutIcon: {
    marginRight: 16,
  },
});
