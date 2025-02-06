// src/store/ordersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mockFetchData, addOrderMock } from '../services/mockApi';

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  return await mockFetchData('orders');
});

export const placeOrder = createAsyncThunk('orders/placeOrder', async (newOrder) => {
  const updatedOrders = await addOrderMock(newOrder);
  return updatedOrders;
});

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchOrders
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // placeOrder
      .addCase(placeOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default ordersSlice.reducer;
