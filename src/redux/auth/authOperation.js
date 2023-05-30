import { db } from '../../firebase/config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import { updateUserProfile, authLogOut } from './authSlice';

import { auth } from '../../firebase/config';
export const authSignUpUser =
  ({ login, email, password }) =>
  async dispatch => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: login,
      });

      const userSuccess = auth.currentUser;
      dispatch(
        updateUserProfile({
          userId: userSuccess.uid,
          nickName: userSuccess.displayName,
          userEmail: userSuccess.email,
          userAvatar: userSuccess.photoURL,
        })
      );
    } catch (error) {
      console.log('error.message', error.message);
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async dispatch => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log('user.user::', user.user);
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

// export const authSignOutUser = () => async (dispatch, getState) => {};
