import { produce } from "immer";

import { UserActionTypes as types } from "../types";
import { Action, UserState } from "../../types";
import { cookies } from "../../utils";

const init: UserState = {
  user: null,
  err: null,
  isLoading: false,
};

const reducer = (state = init, action: Action): UserState => {
  switch (action.type) {
    default: {
      return state;
    }

    case types.SET_USER: {
      return {
        user: action.payload.user,
        err: null,
        isLoading: false,
      };
    }

    case types.LOGIN_REQUESTED: {
      return produce(state, (state) => {
        state.isLoading = true;
      });
    }

    case types.LOGIN_SUCCEED: {
      // Set cookies
      cookies.setAuthCookies(action.payload.tokens);

      return {
        isLoading: false,
        err: null,
        user: {
          authed: true,
          tokens: action.payload.tokens,
          data: action.payload.data,
        },
      };
    }

    case types.LOGIN_FAILED: {
      return produce(state, (state) => {
        state.isLoading = false;
        state.err = action.payload.err;
      });
    }
  }
};

export default reducer;
