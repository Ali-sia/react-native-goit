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
    authLogOut: () => (state = userInitialState),
  },
});

export const { updateUserProfile, authLogOut } = authSlice.actions;

export const authReducer = authSlice.reducer;
