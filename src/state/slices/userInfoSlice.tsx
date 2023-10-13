import { createSlice } from "@reduxjs/toolkit";

export const userInfo = createSlice({
  name: "userInfo",
  initialState: { userInfo: "" },
  reducers: {
    setUserInformation: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
  },
});
export const { setUserInformation } = userInfo.actions;
export default userInfo.reducer;
