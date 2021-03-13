export * from "./redux";

interface User {
  authed: boolean;
  tokens: UserTokens;
  data: UserData;
}

interface UserTokens {
  access: string;
  refresh: string;
}

interface UserData {
  pk?: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

export type { User, UserTokens, UserData };
