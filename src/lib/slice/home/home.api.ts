import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/services/api";

export const getHomePageContent = createAsyncThunk(
  'home/home.slice',
  async (name, { rejectWithValue }) => {
    const res = await axiosInstance.get('/homepageContent');
    const data = await res.data;

    if (data.status < 200 || data.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);