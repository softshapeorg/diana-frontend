import { UserActionTypes as types } from "../types";
import { requests } from "../../utils";

const login = (username: string, password: string) => async (
  dispatch: Function
) => {
  dispatch({
    type: types.LOGIN_REQUESTED,
  });

  try {
    const tokens = await requests.user.tokens(username, password);
    const data = await requests.user.data(tokens);

    dispatch({
      type: types.LOGIN_SUCCEED,
      payload: {
        tokens,
        data,
      },
    });
  } catch (err) {
    dispatch({
      type: types.LOGIN_FAILED,
      payload: {
        err: err,
      },
    });
  }
};

export { login };
