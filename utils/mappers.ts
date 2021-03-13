import * as _ from "lodash";

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

export { mapObjectKeysToCamelCase, mapObjectKeysToSnakeCase };
