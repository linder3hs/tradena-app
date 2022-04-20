import { UserAction, UserModel } from "../actions/user";

type UserState = {
  state: string;
  ok: boolean;
  user: UserModel;
};

const initialState = {
  user: {} as UserModel,
  ok: true,
  state: "200",
};

const UserReducer = (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    case "ON_LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "ON_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { UserReducer };
