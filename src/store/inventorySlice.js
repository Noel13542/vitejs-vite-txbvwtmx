// src/store/inventorySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mockFetchData } from '../services/mockApi';

export const fetchInventory = createAsyncThunk('inventory/fetchInventory', async () => {
  return await mockFetchData('inventory');
});

const inventorySlice = createSlice({
  name: 'inventory',
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInventory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInventory.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchInventory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default inventorySlice.reducer;
