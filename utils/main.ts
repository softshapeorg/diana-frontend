import { GetServerSidePropsContext } from "next";

import { User } from "../types";
import { mapCookiesToTokens } from "./mappers";
import requests from "./requests";

const serverSideAuthenticate = async (
  context: GetServerSidePropsContext
): Promise<[user: User, shouldSetCookies: boolean]> => {
  const tokens = mapCookiesToTokens(context.req.cookies);

  try {
    // Authenticate user based on ACCESS token

    // Request user data
    const data = await requests.user.data(tokens);

    console.log("=============== Login with ACCESS token ===============");
    return [{ authed: true, tokens, data }, false];
  } catch (err) {
    // Authenticate user based on REFRESH token

    // Request new tokens
    const refreshedTokens = await requests.user.refreshTokens(tokens);

    // Request user data
    const data = await requests.user.data(refreshedTokens);

    console.log("=============== Login with REFRESH token ===============");
    return [{ authed: false, tokens: refreshedTokens, data }, true];
  }
};

export { serverSideAuthenticate };
