import { createSlice } from "@reduxjs/toolkit";

export const cartTotalProducts = createSlice({
  name: "cartTotalProducts",
  initialState: { cartTotalProducts: [] },
  reducers: {
    setProduct: (state, action) => {
      if (
        state.cartTotalProducts.some(
          (item) => item.name === action.payload.name && item.size === action.payload.size
        )
      ) {
        for (let i = 0; i < state.cartTotalProducts.length; i++) {
          const item = state.cartTotalProducts[i];
          if (item.name === action.payload.name && item.size === action.payload.size) {
            item.price += action.payload.price;
            item.quantity += action.payload.quantity;
          }
        }
      } else {
        state.cartTotalProducts = [...state.cartTotalProducts, action.payload];
      }
      localStorage.setItem("cartContent", JSON.stringify(state.cartTotalProducts));
    },
    setLocalStorageProducts: (state, action) => {
      state.cartTotalProducts = action.payload;
      localStorage.setItem("cartContent", JSON.stringify(state.cartTotalProducts));
    },
    setRemoveProductFromCart: (state, action) => {
      state.cartTotalProducts = state.cartTotalProducts.filter(
        (product) => product.name + product.size !== action.payload.name + action.payload.size
      );
      localStorage.setItem("cartContent", JSON.stringify(state.cartTotalProducts));
    },
  },
});
export const { setProduct, setLocalStorageProducts, setRemoveProductFromCart } =
  cartTotalProducts.actions;
export default cartTotalProducts.reducer;
