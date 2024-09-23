import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/services/api";

export const getServices = createAsyncThunk(
  'home/home.slice',
  async (name, { rejectWithValue }) => {
    const res = await axiosInstance.get('/services');
    const data = await res.data;

    if (data.status < 200 || data.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);