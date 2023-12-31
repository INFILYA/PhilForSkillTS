import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
type TCartProductsQuantity = { cartProductsQuantity: number };
const initialState: TCartProductsQuantity = { cartProductsQuantity: 0 };

export const cartProductsQuantity = createSlice({
  name: "cartProductsQuantity",
  initialState,
  reducers: {
    setAddProductsQuantity: (state, action: PayloadAction<number>) => {
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
    setRemoveProductQuantity: (state, action: PayloadAction<number>) => {
      state.cartProductsQuantity -= action.payload;
      localStorage.setItem("cartProductsQuantity", JSON.stringify(state.cartProductsQuantity));
    },
    setCardProductsQuantity: (state, action:PayloadAction<number>) => {
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

export const selectCartProductsQuantity = (state: RootState) =>
  state.cartProductsQuantity.cartProductsQuantity;

export default cartProductsQuantity.reducer;
