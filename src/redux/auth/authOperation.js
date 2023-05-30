import { db } from '../../firebase/config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import { auth } from '../../firebase/config';
export const authSignUpUser =
  ({ login, email, password }) =>
  async dispatch => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const userSuccess = auth.currentUser;
      console.log('userSuccess::', userSuccess);
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

// export const authSignInUser = () => async (dispatch, getState) => {};

export const authSignOutUser = () => async (dispatch, getState) => {};
