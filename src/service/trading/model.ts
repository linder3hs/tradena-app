export interface Trading {
  id?: number | null;
  symbol?: string;
  entry?: number;
  target?: number;
  tradingType?: string;
  riskManagementId?: number;
  recomQtyTrade?: number;
  recomStopLossPrice?: number;
  tradeValue?: number;
  effectiveLeverage?: number;
  maxLoss?: number;
  updatedAt?: string;
  createdAt?: string;
}
