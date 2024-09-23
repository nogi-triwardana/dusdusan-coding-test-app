import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/services/api";

export const getTrendingProductCategory = createAsyncThunk<any, any>(
  'products/getTrendingProductCategory',
  async (params, { rejectWithValue }) => {
    const res = await axiosInstance.get('/trendingProductCategory', {
      params
    });
    const data = await res.data;

    if (data.status < 200 || data.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);

export const getProductBrand = createAsyncThunk<any, any>(
  'products/getProductBrand',
  async (params, { rejectWithValue }) => {
    const res = await axiosInstance.get('/productBrand', {
      params
    });
    const data = await res.data;

    if (data.status < 200 || data.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);

export const getListProduct = createAsyncThunk<any, any>(
  'products/products.slice',
  async (params, { rejectWithValue }) => {
    const res = await axiosInstance.get('/product', {
      params
    });
    const data = await res.data;

    if (data.status < 200 || data.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);

export const getProductLastSeen = createAsyncThunk(
  'products/products.slice',
  async (name, { rejectWithValue }) => {
    const res = await axiosInstance.get('/productLastseen');
    const data = await res.data;

    if (data.status < 200 || data.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);