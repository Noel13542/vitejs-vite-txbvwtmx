// src/store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {
      username: 'admin',
      role: 'admin' // admin, manager, viewer 等
    }
  },
  reducers: {
    setUserRole(state, action) {
      state.currentUser.role = action.payload;
    }
  }
});

export const { setUserRole } = userSlice.actions;
export default userSlice.reducer;
