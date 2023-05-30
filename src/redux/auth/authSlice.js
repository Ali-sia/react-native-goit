import { createSlice } from '@reduxjs/toolkit';

const userInitialState = {
  userId: '',
  nickName: '',
  userEmail: '',
  userAvatar: null,
  stateChange: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: userInitialState,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      nickName: payload.nickName,
      userEmail: payload.userEmail,
      userAvatar: payload.userAvatar,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authLogOut: () => userInitialState,
  },
});

export const { updateUserProfile, authLogOut, authStateChange } =
  authSlice.actions;

export const authReducer = authSlice.reducer;
