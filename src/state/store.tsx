import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cartProductsQuantityReducer from "./slices/cartProductsQuantitySlice";
import cartProductsPriceReducer from "./slices/cartProductsPriceSlice";
import cartTotalProductsReducer from "./slices/cartTotalProductsSlice";
import userInfoReducer from "./slices/userInfoSlice";

export const store = configureStore({
  reducer: {
    cartProductsQuantity: cartProductsQuantityReducer,
    cartProductsPrice: cartProductsPriceReducer,
    cartTotalProducts: cartTotalProductsReducer,
    userInfo: userInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
