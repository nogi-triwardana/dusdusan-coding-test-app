import { createSlice } from "@reduxjs/toolkit";
import { getArticles } from "./articles.api";

export const articleSlice = createSlice({
  name: 'article',
  initialState: {
    data: [],
    isLoading: false,
  } as TArticleState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticles.pending, (state, action) => {
      state.isLoading = true;
    }),
    builder.addCase(getArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload?.data
    }),
    builder.addCase(getArticles.rejected, (state, action) => {
      state.isLoading = false;
    })
  }
});