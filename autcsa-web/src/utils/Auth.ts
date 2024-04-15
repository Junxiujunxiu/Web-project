import { UserAttributes } from "./AuthSlice";
import { Base64 } from "js-base64";
import { json } from "react-router-dom";

function saveAuth(accessToken: string) {
  window.localStorage.setItem("accessToken", accessToken);
}

function getAuthToken() {
  return window.localStorage.getItem("accessToken") ?? "";
}

function isAuth() {
  const accessToken = getAuthToken();
  return !!accessToken;
}

function setUserAttributes(usernameInput: string, userAInput: any) {
  const userAttributes = {
    username: usernameInput,
    email: userAInput["email"],
    email_verified: userAInput["email_verified"],
    name: userAInput["name"],
    phone_number: userAInput["phone_number"],
    phone_number_verified: userAInput["phone_number_verified"],
    picture: userAInput["picture"],
    address: userAInput["address"],
    birthdate: userAInput["birthdate"],
  };

  window.localStorage.setItem(
    "_id",
    Base64.encode(JSON.stringify(userAttributes))
  );
}

function getUserAttribute(): UserAttributes {
  if (window.localStorage.getItem("_id")) {
    return JSON.parse(Base64.decode(window.localStorage.getItem("_id")!));
  } else {
    return JSON.parse("{}");
  }
}

function logout() {
  window.localStorage.removeItem("accessToken");
  window.localStorage.removeItem("idToken");
  window.localStorage.removeItem("refreshToken");
  window.localStorage.removeItem("_id");
}

export const Auth = {
  saveAuth,
  getAuthToken,
  isAuth,
  setUserAttributes,
  getUserAttribute,
  logout,
};
