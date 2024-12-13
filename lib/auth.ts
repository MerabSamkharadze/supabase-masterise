import Cookies from "js-cookie";

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

export const setAccessToken = (token: string) => {
  Cookies.set(ACCESS_TOKEN_KEY, token, { expires: 1 }); // Token expires in 1 day
};

export const getAccessToken = () => {
  return Cookies.get(ACCESS_TOKEN_KEY);
};

export const setRefreshToken = (token: string) => {
  Cookies.set(REFRESH_TOKEN_KEY, token);
};

export const getRefreshToken = () => {
  return Cookies.get(REFRESH_TOKEN_KEY);
};

export const removeTokens = () => {
  Cookies.remove(ACCESS_TOKEN_KEY);
  Cookies.remove(REFRESH_TOKEN_KEY);
};
