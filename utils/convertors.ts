import * as _ from "lodash";

const convertObjectKeysToCamelCase = (data: any) => {
  const res = {};

  for (let key in data) {
    res[_.camelCase(key)] = data[key];
  }

  return res;
};

const convertObjectKeysToSnakeCase = (data: any) => {
  const res = {};

  for (let key in data) {
    res[_.snakeCase(key)] = data[key];
  }

  return res;
};

export { convertObjectKeysToCamelCase, convertObjectKeysToSnakeCase };
