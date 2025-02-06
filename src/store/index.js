// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import ordersReducer from './ordersSlice';
import procurementReducer from './procurementSlice';
import inventoryReducer from './inventorySlice';
import logisticsReducer from './logisticsSlice';
import analyticsReducer from './analyticsSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    orders: ordersReducer,
    procurement: procurementReducer,
    inventory: inventoryReducer,
    logistics: logisticsReducer,
    analytics: analyticsReducer
  }
});
