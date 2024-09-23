import { createSlice } from "@reduxjs/toolkit";
import { getArticles } from "./articles.api";

export const articleSlice = createSlice({
  name: 'article',
  initialState: {
    data: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticles.fulfilled, (state, action) => {
      state.data = action.payload?.data
    })
  }
});