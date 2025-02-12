import React, { useState } from 'react';
import { Wallet, ArrowRightLeft, DollarSign } from 'lucide-react';
import type { ContractState } from './types/contract';
import logo from './assets/logo.png'; // Ensure the logo is correctly placed
import { TonConnectButton } from '@tonconnect/ui-react';

function App() {
  const [amountUSDT, setAmountUSDT] = useState<string>('');
  const [amountMNest, setAmountMNest] = useState<string>('');
  const [contractState, setContractState] = useState<ContractState>({
    loading: false,
    error: null,
    data: {
      exchangeRate: 5, // 1 MNest = 0.2 USDT
      owner: '0x1234...5678',
      balances: {
        MNest: 1000000,
        usdt: 200000
      }
    }
  });

  const handleUSDTChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmountUSDT(value);
    setAmountMNest(value ? (Number(value) * contractState.data!.exchangeRate).toFixed(6) : '');
  };

  const handleMNestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmountMNest(value);
    setAmountUSDT(value ? (Number(value) / contractState.data!.exchangeRate).toFixed(6) : '');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-600 to-indigo-500 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="MNest Logo" className="w-11 h-11 rounded-full" />
              <h1 className="text-3xl font-bold">MNest Token Swap</h1>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
              <Wallet className="w-5 h-5 text-white" />
              <span className="text-sm font-medium">{<TonConnectButton />}</span>
            </div>
          </div>

          {/* Swap Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Swap USDT for MNest</h2>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-300">MNest Balance</span>
                    <img src={logo} alt="MNest Icon" className="w-6 h-6 rounded-full" />
                  </div>
                  <div className="text-lg font-medium">
                    {(contractState.data?.balances.MNest / 1000000).toFixed(6)}
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-300">USDT Balance</span>
                    <DollarSign className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-lg font-medium">
                    {(contractState.data?.balances.usdt / 1000000).toFixed(6)}
                  </div>
                </div>
              </div>

              <form>
                <div className="space-y-4">
                  {/* USDT Input */}
                  <div className="relative">
                    <input
                      type="number"
                      value={amountUSDT}
                      onChange={handleUSDTChange}
                      placeholder="Enter USDT amount"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-300">
                      USDT
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRightLeft className="w-6 h-6 text-indigo-400" />
                  </div>

                  {/* MNest Input */}
                  <div className="relative">
                    <input
                      type="number"
                      value={amountMNest}
                      onChange={handleMNestChange}
                      placeholder="Enter MNest amount"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-300">
                      MNest
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg px-4 py-3 font-medium hover:from-indigo-600 hover:to-indigo-700 transition-colors"
                  >
                    Swap Tokens
                  </button>
                </div>
              </form>
            </div>

            {/* Exchange Rate Info */}
            <div className="border-t border-white/10 pt-4">
              <div className="flex justify-between text-sm text-gray-300">
                <span>Exchange Rate:</span>
                <span>{contractState.data?.exchangeRate} MNest = 0.2 USDT </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
