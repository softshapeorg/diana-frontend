import { UserActionTypes as UserActionTypesType } from "../types";

const UserActionTypes: UserActionTypesType = {
  // Login
  LOGIN_REQUESTED: "Login request has been requested.",
  LOGIN_SUCCEED: "Login request has been succeed.",
  LOGIN_FAILED: "Login request has been failed.",

  // Registration
  REGISTRATION_REQUESTED: "Registration request has been requested.",
  REGISTRATION_SUCCEED: "Registration request has been succeed.",
  REGISTRATION_FAILED: "Registration request has been failed.",

  // Login
  UPDATE_REQUESTED: "Update user request has been requested.",
  UPDATE_SUCCEED: "Update user request has been succeed.",
  UPDATE_FAILED: "Update user request has been failed.",
};

export { UserActionTypes };
