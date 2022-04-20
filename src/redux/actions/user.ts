import * as SERVICE from '../../service/routes';
import {Dispatch} from 'react';
import axios from 'axios';

export interface User {
  id?: number | null;
  email?: string;
  password?: string;
  phoneNumber?: string;
  phoneCode?: string;
  name?: string;
  googleId?: string;
  state?: string;
  image?: string;
  token?: string;
  emailCode?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserModel {
  ok: boolean;
  status: string;
  data: User;
}

export interface LoginAction {
  readonly type: 'ON_LOGIN';
  payload: UserModel;
}

export interface ErrorAction {
  readonly type: 'ON_ERROR';
  payload: any;
}

export type UserAction = LoginAction | ErrorAction;

export const fetchLogin = (body: any) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.post<UserModel>(SERVICE.LOGIN, body);

      if (!response) {
        dispatch({
          type: 'ON_ERROR',
          payload: 'Internal error login',
        });
      } else {
        dispatch({
          type: 'ON_LOGIN',
          payload: response.data,
        });
      }
    } catch (error) {
      dispatch({
        type: 'ON_ERROR',
        payload: error,
      });
    }
  };
};
