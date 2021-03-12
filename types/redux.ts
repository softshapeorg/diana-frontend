interface State {}

interface UserActionTypes {
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

export type { State, UserActionTypes };
