import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type TCartProductsPrice = { cartProductsPrice: number };
const initialState: TCartProductsPrice = { cartProductsPrice: 0 };

export const cartProductsPrice = createSlice({
  name: "cartProductsPrice",
  initialState,
  reducers: {
    setAddProductsPrice: (state, action: PayloadAction<number>) => {
      state.cartProductsPrice = state.cartProductsPrice + action.payload;
      localStorage.setItem("cartProductsPrice", JSON.stringify(state.cartProductsPrice));
    },
    setReduceProductsPrice: (state, action: PayloadAction<number>) => {
      state.cartProductsPrice = state.cartProductsPrice - action.payload;
      localStorage.setItem("cartProductsPrice", JSON.stringify(state.cartProductsPrice));
    },
    setRemoveProductPrice: (state, action: PayloadAction<number>) => {
      state.cartProductsPrice -= action.payload;
      localStorage.setItem("cartProductsPrice", JSON.stringify(state.cartProductsPrice));
    },
    setCartProductsPrice: (state, action: PayloadAction<number>) => {
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

export const selectCartProductsPrice = (state: RootState) =>
  state.cartProductsPrice.cartProductsPrice;

export default cartProductsPrice.reducer;
