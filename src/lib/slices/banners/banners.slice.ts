import { createSlice } from "@reduxjs/toolkit";
import { getPromoBanner } from "./banners.api";

export const bannerSlice = createSlice({
  name: 'banners',
  initialState: {
    data: [],
    isLoading: false,
  } as TBannerState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPromoBanner.pending, (state, action) => {
      state.isLoading = true;
    }),
    builder.addCase(getPromoBanner.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload?.data
    }),
    builder.addCase(getPromoBanner.rejected, (state, action) => {
      state.isLoading = false;
    })
  }
});