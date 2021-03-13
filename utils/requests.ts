import axios from "../axios";
import { UserTokens, UserData } from "../types";
import {
  convertObjectKeysToCamelCase,
  convertObjectKeysToSnakeCase,
} from "../utils";

// =============== User ===============
const userTokens = async (
  username: string,
  password: string
): Promise<UserTokens> => {
  const res = await axios.post("/accounts/login/", { username, password });
  return {
    access: res.data["access_token"],
    refresh: res.data["refresh_token"],
  };
};

const userData = async (tokens: UserTokens): Promise<UserData> => {
  const res = await axios.get("/accounts/user/", {
    headers: {
      Authorization: `Bearer ${tokens.access}`,
    },
  });

  return <UserData>convertObjectKeysToCamelCase(res.data);
};

const registration = async (data: any) => {
  const res = await axios.post(
    "/accounts/registration/",
    convertObjectKeysToSnakeCase(data)
  );

  return convertObjectKeysToCamelCase(res.data);
};

const requests = {
  user: {
    tokens: userTokens,
    data: userData,
    registration,
  },
};

export default requests;
