import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TChoosenProduct } from "../../Types/types";
import { RootState } from "../store";

type TCartTotalProducts = {
  cartTotalProducts: TChoosenProduct[];
};
const initialState: TCartTotalProducts = {
  cartTotalProducts: [],
};

export const cartTotalProducts = createSlice({
  name: "cartTotalProducts",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<TChoosenProduct>) => {
      if (
        state.cartTotalProducts.some(
          (item) => item.name === action.payload.name && item.size[0] === action.payload.size[0]
        )
      ) {
        for (let i = 0; i < state.cartTotalProducts.length; i++) {
          const item = state.cartTotalProducts[i];
          if (item.name === action.payload.name && item.size[0] === action.payload.size[0]) {
            item.price += action.payload.price;
            item.quantity += action.payload.quantity;
          }
        }
      } else {
        state.cartTotalProducts = [...state.cartTotalProducts, action.payload];
      }
      localStorage.setItem("cartContent", JSON.stringify(state.cartTotalProducts));
    },
    setLocalStorageProducts: (state, action: PayloadAction<TChoosenProduct[]>) => {
      state.cartTotalProducts = action.payload;
      localStorage.setItem("cartContent", JSON.stringify(state.cartTotalProducts));
    },
    setRemoveProductFromCart: (state, action: PayloadAction<TChoosenProduct>) => {
      state.cartTotalProducts = state.cartTotalProducts.filter(
        (product) => product.name + product.size !== action.payload.name + action.payload.size
      );
      localStorage.setItem("cartContent", JSON.stringify(state.cartTotalProducts));
    },
  },
});
export const { setProduct, setLocalStorageProducts, setRemoveProductFromCart } =
  cartTotalProducts.actions;

export const selectCartTotalProducts = (state: RootState) =>
  state.cartTotalProducts.cartTotalProducts;

export default cartTotalProducts.reducer;
