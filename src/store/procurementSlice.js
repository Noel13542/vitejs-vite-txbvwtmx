// src/store/procurementSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mockFetchData } from '../services/mockApi';

export const fetchProcurements = createAsyncThunk(
  'procurement/fetchProcurements',
  async () => {
    return await mockFetchData('procurements');
  }
);

const procurementSlice = createSlice({
  name: 'procurement',
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProcurements.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProcurements.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchProcurements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default procurementSlice.reducer;
