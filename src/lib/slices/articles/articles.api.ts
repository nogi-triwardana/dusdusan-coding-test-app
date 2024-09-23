import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/services/api";

export const getArticles = createAsyncThunk<any, any>(
  'article/article.slice',
  async (params, { rejectWithValue }) => {
    const res = await axiosInstance.get('/articles', {
      params
    });
    const data = await res.data;

    if (data.status < 200 || data.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);