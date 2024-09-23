import { createSlice } from "@reduxjs/toolkit";
import { getPromoBanner } from "./banners.api";

export const bannerSlice = createSlice({
  name: 'banners',
  initialState: {
    data: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPromoBanner.fulfilled, (state, action) => {
      state.data = action.payload
    })
  }
});