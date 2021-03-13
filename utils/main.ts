import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { User } from "../types";
import { mapCookiesToTokens } from "./mappers";
import requests from "./requests";

const authenticateByCookies = async (
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

const serverSideAuthentication = (
  redirect: boolean
): GetServerSideProps => async (context) => {
  try {
    const [user, shouldSetCookies] = await authenticateByCookies(context);
    return {
      props: {
        user,
        shouldSetCookies,
      },
    };
  } catch (err) {
    if (redirect) {
      return {
        redirect: {
          destination: "/accounts/login",
          permanent: false,
        },
      };
    }
  }
};

export { authenticateByCookies, serverSideAuthentication };
