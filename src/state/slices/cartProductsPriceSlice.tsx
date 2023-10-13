import { createSlice } from "@reduxjs/toolkit";

export const cartProductsPrice = createSlice({
  name: "cartProductsPrice",
  initialState: { cartProductsPrice: 0 },
  reducers: {
    setAddProductsPrice: (state, action) => {
      state.cartProductsPrice = state.cartProductsPrice + action.payload;
      localStorage.setItem("cartProductsPrice", JSON.stringify(state.cartProductsPrice));
    },
    setReduceProductsPrice: (state, action) => {
      state.cartProductsPrice = state.cartProductsPrice - action.payload;
      localStorage.setItem("cartProductsPrice", JSON.stringify(state.cartProductsPrice));
    },
    setRemoveProductPrice: (state, action) => {
      state.cartProductsPrice -= action.payload;
      localStorage.setItem("cartProductsPrice", JSON.stringify(state.cartProductsPrice));
    },
    setCartProductsPrice: (state, action) => {
      state.cartProductsPrice = action.payload;
      localStorage.setItem("cartProductsPrice", JSON.stringify(state.cartProductsPrice));
    },
  },
});
export const {
  setAddProductsPrice,
  setReduceProductsPrice,
  setCartProductsPrice,
  setRemoveProductPrice,
} = cartProductsPrice.actions;
export default cartProductsPrice.reducer;