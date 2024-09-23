import { createSlice } from "@reduxjs/toolkit";
import { getListProduct, getProductBrand, getTrendingProductCategory } from "./products.api";

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    trendingProductCategory: null,
    productBrand: null,
    products: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrendingProductCategory.fulfilled, (state, action) => {
      state.trendingProductCategory = action.payload
    }),
    builder.addCase(getProductBrand.fulfilled, (state, action) => {
      state.productBrand = action.payload?.data
    }),
    builder.addCase(getListProduct.fulfilled, (state, action) => {
      state.products = action?.payload?.data
    })
  }
});