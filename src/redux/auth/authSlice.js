import { createSlice } from '@reduxjs/toolkit';

const userInitialState = {
  userId: '',
  nickName: '',
  userEmail: '',
  userAvatar: null,
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
    authLogOut: () => userInitialState,
  },
});

export const { updateUserProfile, authLogOut } = authSlice.actions;

export const authReducer = authSlice.reducer;
