import { createSlice } from "@reduxjs/toolkit";
import { getHomePageContent } from "./home.api";

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    data: {
      banner: {
        memberNonReseller: []
      },
      product: {
        productByNumberOfSales: [],
        trendingProduct: []
      }
    },
    isLoading: false,
  } as THomeState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHomePageContent.pending, (state, action) => {
      state.isLoading = true;
    }),
    builder.addCase(getHomePageContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload
    }),
    builder.addCase(getHomePageContent.rejected, (state, action) => {
      state.isLoading = false;
    })
  },
});