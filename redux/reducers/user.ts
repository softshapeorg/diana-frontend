import { produce } from "immer";

import { UserActionTypes as types } from "../types";
import { Action, UserState } from "../../types";

const init: UserState = {
  user: null,
  err: null,
  isLoading: false,
};

const reducer = (state = init, action: Action) => {
  switch (action.type) {
    default: {
      return state;
    }

    case types.LOGIN_REQUESTED: {
      return produce(state, (state) => {
        state.isLoading = true;
      });
    }

    case types.LOGIN_SUCCEED: {
      return produce(state, (state) => {
        state.isLoading = false;
        state.err = null;
        state.user = {
          authed: true,
          tokens: action.payload.tokens,
          data: action.payload.data,
        };
      });
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
