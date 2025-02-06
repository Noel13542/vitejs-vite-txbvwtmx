// src/store/logisticsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mockFetchData } from '../services/mockApi';

export const fetchLogistics = createAsyncThunk('logistics/fetchLogistics', async () => {
  return await mockFetchData('logistics');
});

const logisticsSlice = createSlice({
  name: 'logistics',
  initialState: {
    shipments: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogistics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLogistics.fulfilled, (state, action) => {
        state.loading = false;
        state.shipments = action.payload;
      })
      .addCase(fetchLogistics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default logisticsSlice.reducer;
