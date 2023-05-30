import { StyleSheet, TouchableOpacity } from 'react-native';
import LogOutIcon from '../icons/logout';

import { useDispatch } from 'react-redux';
import { authSignOutUser } from '../redux/auth/authOperation';

export default function LogOutBtn() {
  const dispatch = useDispatch();

  return (
    <>
      <TouchableOpacity
        style={styles.logoutIcon}
        activeOpacity={0.8}
        onPress={() => dispatch(authSignOutUser())}
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
