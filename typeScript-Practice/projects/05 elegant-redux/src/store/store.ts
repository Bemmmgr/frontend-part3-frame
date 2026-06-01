import { configureStore } from "@reduxjs/toolkit";
import { cartslice } from "./cart-slice";

// 089 - creating redux store & first slice
configureStore({
  reducer: {
    cart: cartslice.reducer,
  },
});
