import { createSlice } from "@reduxjs/toolkit";
import { getListProduct, getProductBrand, getTrendingProductCategory } from "./products.api";

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    trendingProductCategory: [],
    productBrand: [],
    products: [],
    isLoadingProduct: false,
    isLoadingTrendingProductCategory: false,
    isLoadingProductBrand: false,
  } as TProductState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrendingProductCategory.pending, (state, action) => {
      state.isLoadingTrendingProductCategory = true;
    }),
    builder.addCase(getTrendingProductCategory.fulfilled, (state, action) => {
      state.isLoadingTrendingProductCategory = false;
      state.trendingProductCategory = action.payload?.data
    }),
    builder.addCase(getTrendingProductCategory.rejected, (state, action) => {
      state.isLoadingTrendingProductCategory = false;
    }),
    
    builder.addCase(getProductBrand.pending, (state, action) => {
      state.isLoadingProductBrand = true;
    }),
    builder.addCase(getProductBrand.fulfilled, (state, action) => {
      state.isLoadingProductBrand = false;
      state.productBrand = action.payload?.data
    }),
    builder.addCase(getProductBrand.rejected, (state, action) => {
      state.isLoadingProductBrand = false;
    }),

    builder.addCase(getListProduct.pending, (state, action) => {
      state.isLoadingProduct = true;
    }),
    builder.addCase(getListProduct.fulfilled, (state, action) => {
      state.isLoadingProduct = false;
      state.products = action?.payload?.data
    }),
    builder.addCase(getListProduct.rejected, (state, action) => {
      state.isLoadingProduct = false;
    })
  }
});