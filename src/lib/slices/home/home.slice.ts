import { createSlice } from "@reduxjs/toolkit";
import { getHomePageContent } from "./home.api";

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    data: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHomePageContent.fulfilled, (state, action) => {
      state.data = action.payload
    })
  },
});