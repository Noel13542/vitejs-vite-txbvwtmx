// src/store/analyticsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mockFetchData } from '../services/mockApi';

export const fetchAnalyticsData = createAsyncThunk(
  'analytics/fetchAnalyticsData',
  async () => {
    return await mockFetchData('analytics');
  }
);

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnalyticsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnalyticsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAnalyticsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default analyticsSlice.reducer;
