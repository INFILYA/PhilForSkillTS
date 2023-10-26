import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
type TUserInfo = { userInfo: string };
const initialState: TUserInfo = { userInfo: "" };

export const userInfo = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInformation: (state, action: PayloadAction<string>) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
  },
});
export const { setUserInformation } = userInfo.actions;
export const selectUserInfo = (state: RootState) => state.userInfo.userInfo;
export default userInfo.reducer;
