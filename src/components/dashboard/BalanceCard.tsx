import React from 'react';

interface BalanceCardProps {
  balance: string;
  percentage: string;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({ balance, percentage }) => {
  return (
    <section className="bg-white flex w-full max-w-[353px] flex-col items-stretch p-5 rounded-[36px]">
      <header className="flex items-center gap-2">
        <h2 className="text-[rgba(28,28,28,1)] text-lg font-normal self-stretch my-auto">
          Total balance
        </h2>
        <span className="self-stretch bg-[rgba(104,249,97,0.29)] gap-[5px] text-sm text-[rgba(28,211,19,1)] font-semibold whitespace-nowrap my-auto px-[3px] py-0.5 rounded-[5px]">
          {percentage}
        </span>
      </header>
      <div className="text-[rgba(28,28,28,1)] text-4xl font-medium">
        {balance}
      </div>
    </section>
  );
};