import {POST} from '../methods';
import * as SERVICE from '../routes';
import {User} from '../../redux/actions/user';

export type NetworkResponse = {
  status: number;
  ok: boolean;
  data: any;
};

export const login = async (body: any): Promise<User> => {
  try {
    const response = await fetch(SERVICE.LOGIN, POST('', body));
    const data = await response.json();
    return data.data;
  } catch (error: any) {
    return error.toString();
  }
};
