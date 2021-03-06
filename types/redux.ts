import { User } from ".";

interface State {
  user: UserState;
}

interface BaseState {
  err: any;
  isLoading: boolean;
}

interface UserState extends BaseState {
  user: User;
}

interface UserActionTypes {
  // Set User
  SET_USER: string;

  // Login
  LOGIN_REQUESTED: string;
  LOGIN_SUCCEED: string;
  LOGIN_FAILED: string;

  // Registration
  REGISTRATION_REQUESTED: string;
  REGISTRATION_SUCCEED: string;
  REGISTRATION_FAILED: string;

  // Update user
  UPDATE_REQUESTED: string;
  UPDATE_SUCCEED: string;
  UPDATE_FAILED: string;
}

interface Action {
  type: string;
  payload?: any;
}

export type { State, UserActionTypes, UserState, Action };
