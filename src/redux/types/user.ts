import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type User = {
  id?: number | null;
  email?: string;
  password?: string;
  phoneNumber?: string;
  phoneCode?: string;
  name?: string;
  googleId?: string;
  state?: string;
  image?: string;
  token?: string;
  emailCode?: string;
  createdAt?: string;
  updatedAt?: string;
};

const initialState: User = {
  id: null,
  email: "",
  password: "",
  phoneNumber: "",
  phoneCode: "",
  name: "",
  googleId: "",
  state: "",
  image: "",
  token: "",
  emailCode: "",
  createdAt: "",
  updatedAt: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
});

export default userSlice.reducer;
