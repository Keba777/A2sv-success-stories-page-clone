import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stories: [],
};

const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {
    setStories: (state, action) => {
      state.stories = action.payload;
    },
    incrementLikes: (state, action) => {
      const story = state.stories.find((story) => story.id === action.payload);
      if (story) {
        story.likes += 1;
      }
    },
  },
});

export const { setStories, incrementLikes } = storySlice.actions;
export const selectStories = (state) => state.story.stories;
export default storySlice.reducer;
