import { GetServerSidePropsContext } from "next";
import { NextApiRequestCookies } from "next/dist/next-server/server/api-utils";
import * as _ from "lodash";

import { UserTokens } from "../types";

const mapObjectKeysToCamelCase = (data: any) => {
  const res = {};

  for (let key in data) {
    res[_.camelCase(key)] = data[key];
  }

  return res;
};

const mapObjectKeysToSnakeCase = (data: any) => {
  const res = {};

  for (let key in data) {
    res[_.snakeCase(key)] = data[key];
  }

  return res;
};

const mapCookiesToTokens = (cookies: NextApiRequestCookies): UserTokens => ({
  access: cookies.accessToken,
  refresh: cookies.refreshToken,
});

export {
  mapObjectKeysToCamelCase,
  mapObjectKeysToSnakeCase,
  mapCookiesToTokens,
};
