import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
type TUserInfo = { userInfo: string };
type TUserInfoAction = { type: string; payload: string };
const initialState: TUserInfo = { userInfo: "" };

export const userInfo = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInformation: (state, action: TUserInfoAction) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
  },
});
export const { setUserInformation } = userInfo.actions;
export const selectUserInfo = (state: RootState) => state.userInfo.userInfo;
export default userInfo.reducer;
