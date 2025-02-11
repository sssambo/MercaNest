// Smart contract interface types
export interface SSSPSaleV0Contract {
  exchangeRate: number;
  owner: string;
  balances: {
    sss: number;
    usdt: number;
  };
}

export interface TransactionResult {
  success: boolean;
  message: string;
  txHash?: string;
}

export interface ContractState {
  loading: boolean;
  error: string | null;
  data: SSSPSaleV0Contract | null;
}