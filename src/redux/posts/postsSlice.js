import { createSlice } from '@reduxjs/toolkit';

const postsInitialState = {
  posts: [],
  comments: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  reducers: {
    postsUpload: (state, { payload }) => ({}),
  },
});

export const {} = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
