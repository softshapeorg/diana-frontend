import Cookies from "universal-cookie";

import { UserTokens } from "../types";

const setAuthCookies = (tokens: UserTokens) => {
  const cookies = new Cookies();
  cookies.set("accessToken", tokens.access, { path: "/" });
  cookies.set("refreshToken", tokens.refresh, { path: "/" });
};

const removeAuthCookies = () => {
  const cookies = new Cookies();
  cookies.remove("accessToken", { path: "/" });
  cookies.remove("refreshToken", { path: "/" });
};

const cookies = {
  setAuthCookies,
  removeAuthCookies,
};

export default cookies;
