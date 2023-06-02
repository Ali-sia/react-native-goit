import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import { updateUserProfile, authLogOut, authStateChange } from './authSlice';
import uploadPhotoToServer from '../../helpers/uploadPhoto';

import { auth } from '../../firebase/config';

export const authSignUpUser =
  ({ login, email, password, userAvatar }) =>
  async dispatch => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const uploadedAvatar = await uploadPhotoToServer(
        userAvatar,
        'usersAvatar'
      );
      await updateProfile(auth.currentUser, {
        displayName: login,
        photoURL: uploadedAvatar,
      });

      const userSuccess = auth.currentUser;

      const userUpdateProfile = {
        userId: userSuccess.uid,
        nickName: userSuccess.displayName,
        userEmail: userSuccess.email,
        userAvatar: userSuccess.photoURL,
      };

      dispatch(updateUserProfile(userUpdateProfile));
    } catch (error) {
      console.log('error.message', error.message);
    }
  };

export const authSignInUser =
  ({ email, password, photo }) =>
  async dispatch => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log('error.message', error.message);
    }
  };

export const authSignOutUser = () => async dispatch => {
  try {
    await signOut(auth);
    dispatch(authLogOut());
  } catch (error) {
    console.log('error.message', error.message);
  }
};

export const authStateChangeUser = () => async dispatch => {
  try {
    onAuthStateChanged(auth, user => {
      if (user) {
        const userUpdate = {
          userId: user.uid,
          nickName: user.displayName,
          userEmail: user.email,
          userAvatar: user.photoURL,
        };

        dispatch(authStateChange({ stateChange: true }));
        dispatch(updateUserProfile(userUpdate));
      }
    });
  } catch (error) {
    console.log('error.message', error.message);
  }
};
