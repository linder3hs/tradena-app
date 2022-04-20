import { POST, GET } from '../methods';
import * as SERVICE from '../routes';
import { RiskManagment } from './model';

export const storeRiksManagement = async (token: string, body: any) => {
  try {
    const response = await fetch(
      SERVICE.STORE_RIKS_MANAGEMENT,
      POST(token, body),
    );
    const data = await response.json();
    return data;
  } catch (err: any) {
    return err;
  }
};

export const historyRiskManagment = async (token: string, userId: string) => {
  try {
    const response = await fetch(
      `${SERVICE.HISTORY_RISK_MANAGMENT}/${userId}`,
      GET(token),
    );
    const data = await response.json();
    return data;
  } catch (err: any) {
    return err;
  }
};

export const getActiveRiskManagment = async (
  token: string,
  userId: string,
): Promise<RiskManagment> => {
  try {
    const response = await fetch(
      `${SERVICE.ACTIVE_RISK_MANAGMENT}/${userId}`,
      GET(token),
    );
    const data = await response.json();

    return data.data;
  } catch (err: any) {
    return err;
  }
};

export const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvYmplY3QiOnsiZW1haWwiOiJkZXZnYmxhbmNvQGdtYWlsLmNvbSIsIm5hbWUiOiJHdXN0YXZvIEJsYW5jbyBUaWNvbmEiLCJnb29nbGVJZCI6IjExNDYzODEyNDQzNDU0NDQ1NjA1MiIsInN0YXRlIjoiMSJ9LCJpYXQiOjE2MzYzNzgxMjF9.onZMD6f6a78jo6e0SecitcJxjPxIf69H5MrpO1M708c';
