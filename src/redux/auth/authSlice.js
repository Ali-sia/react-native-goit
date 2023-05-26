import { createSlice } from '@reduxjs/toolkit';

const userInitialState = {
  userId: '',
  nickname: '',
  userEmail: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: userInitialState,
  reducers: {},
});

export const authReducer = authSlice.reducer;
