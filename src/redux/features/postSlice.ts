import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Post = {
  id: string;
  title: string;
  content: string;
};

type PostState = {
  list: Post[];
};

const initialState: PostState = {
  list: [],
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.list.push(action.payload);
    },
    deletePost: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(post => post.id !== action.payload);
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
