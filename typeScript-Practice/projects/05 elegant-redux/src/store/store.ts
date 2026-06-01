import { configureStore } from "@reduxjs/toolkit";
import { cartslice } from "./cart-slice";

// 089 - creating redux store & first slice
export const store = configureStore({
  reducer: {
    cart: cartslice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
