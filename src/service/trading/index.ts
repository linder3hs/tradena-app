import { POST } from "../methods";
import { tInterface } from "./tInterface";
import { Trading } from "./model";
import * as SERVICE from "../routes";

export const getRecommend = async (
  token: string,
  body: tInterface
): Promise<Trading | undefined> => {
  try {
    const response = await fetch(
      SERVICE.GET_RECOMMEND_TRADING,
      POST(token, body)
    );
    const data = await response.json();
    return data.data;
  } catch (error: any) {
    return error.toString();
  }
};

export const storeTrading = async (
  token: string,
  body: tInterface
): Promise<Trading | undefined> => {
  try {
    const response = await fetch(SERVICE.STORE_TRADING, POST(token, body));
    const data = await response.json();
    return data.data;
  } catch (error: any) {
    return error.toString();
  }
};
