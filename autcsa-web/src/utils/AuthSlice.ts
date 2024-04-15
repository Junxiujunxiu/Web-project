import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserAttributes {
  username: string;
  email: string;
  email_verified: boolean;
  name: string;
  phone_number_verified?: boolean;
  phone_number?: string;
  picture: string;
  address?: string;
  birthdate: string;
}

const initialState: UserAttributes = {
  username: "",
  email: "",
  email_verified: false,
  name: "",
  phone_number: "",
  phone_number_verified: false,
  picture: "",
  address: "",
  birthdate: "",
};

const AuthSlice = createSlice({
  name: "AuthState",
  initialState,
  reducers: {
    setUserAttributes: (state, action: PayloadAction<UserAttributes>) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.email_verified = action.payload.email_verified;
      state.name = action.payload.name;
      state.phone_number = action.payload.phone_number;
      state.phone_number_verified = action.payload.phone_number_verified;
      state.picture = action.payload.picture;
      state.address = action.payload.address;
    },
    clearUserAttributes: (state, action: PayloadAction<UserAttributes>) => {
      state.username = "";
      state.email = "";
      state.email_verified = false;
      state.name = "";
      state.phone_number = "";
      state.phone_number_verified = false;
      state.picture = "";
      state.address = "";
    },
  },
});

export const { setUserAttributes, clearUserAttributes } = AuthSlice.actions;
export default AuthSlice.reducer;
