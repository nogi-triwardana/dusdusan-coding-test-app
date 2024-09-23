import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/services/api";

export const getPromoBanner = createAsyncThunk(
  'banner/banner.slice',
  async (name, { rejectWithValue }) => {
    const res = await axiosInstance.get('/promoBanner/home');
    const data = await res.data;

    if (data.status < 200 || data.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);