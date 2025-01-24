import React from 'react';
import { TransactionItem } from './TransactionItem';

export const TransactionHistory: React.FC = () => {
  const transactions = [
    { amount: '+ $150', time: '11:50 PM', address: 'from alexhook.eth' },
    { amount: '+ $150', time: '10:13 PM', address: 'from alexhook.eth' },
    { amount: '+ $150', time: '10:11 PM', address: 'from alexhook.eth' },
  ];

  return (
    <section className="self-stretch w-full mt-4">
      <header className="flex min-h-[26px] w-full text-xl justify-between px-5">
        <h2 className="text-[rgba(28,28,28,1)] font-normal w-[353px]">
          Transaction History
        </h2>
        <button className="text-[rgba(143,143,143,1)] font-medium text-right">
          See all
        </button>
      </header>
      <div className="flex w-full flex-col items-center text-lg mt-3">
        {transactions.map((transaction, index) => (
          <TransactionItem key={index} {...transaction} />
        ))}
      </div>
    </section>
  );
};