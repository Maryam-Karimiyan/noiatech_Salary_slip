import { createSlice } from "@reduxjs/toolkit";

//admin or user
const userSlice = createSlice({
  name: "user",
  initialState: "admin",
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // payload نقش کاربر را شامل می‌شود
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
