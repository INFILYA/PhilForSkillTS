import { createSlice } from "@reduxjs/toolkit";

export const cartProductsQuantity = createSlice({
  name: "cartProductsQuantity",
  initialState: { cartProductsQuantity: 0 },
  reducers: {
    setAddProductsQuantity: (state, action) => {
      state.cartProductsQuantity = state.cartProductsQuantity + action.payload;
      localStorage.setItem("cartProductsQuantity", JSON.stringify(state.cartProductsQuantity));
    },
    setMinusOneProductsQuantity: (state) => {
      state.cartProductsQuantity = state.cartProductsQuantity - 1;
      localStorage.setItem("cartProductsQuantity", JSON.stringify(state.cartProductsQuantity));
    },
    setPlusOneProductsQuantity: (state) => {
      state.cartProductsQuantity = state.cartProductsQuantity + 1;
      localStorage.setItem("cartProductsQuantity", JSON.stringify(state.cartProductsQuantity));
    },
    setRemoveProductQuantity: (state, action) => {
      state.cartProductsQuantity -= action.payload;
      localStorage.setItem("cartProductsQuantity", JSON.stringify(state.cartProductsQuantity));
    },
    setCardProductsQuantity: (state, action) => {
      state.cartProductsQuantity = action.payload;
      localStorage.setItem("cartProductsQuantity", JSON.stringify(state.cartProductsQuantity));
    },
  },
});
export const {
  setAddProductsQuantity,
  setMinusOneProductsQuantity,
  setPlusOneProductsQuantity,
  setCardProductsQuantity,
  setRemoveProductQuantity,
} = cartProductsQuantity.actions;
export default cartProductsQuantity.reducer;
