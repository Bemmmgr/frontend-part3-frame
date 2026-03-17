import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';

// 24002 -
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
