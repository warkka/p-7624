import React from 'react';
import { ArrowDownRight } from 'lucide-react';

interface TransactionItemProps {
  amount: string;
  time: string;
  address: string;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({ amount, time, address }) => {
  return (
    <article className="flex w-full max-w-[373px] items-stretch px-2.5 py-2 rounded-[20px]">
      <div className="flex min-w-60 items-stretch gap-4 flex-1 shrink basis-[0%]">
        <div className="bg-[rgba(38,237,28,1)] flex w-12 shrink-0 h-12 my-auto rounded-[500px] items-center justify-center">
          <ArrowDownRight className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col items-stretch justify-center flex-1 shrink basis-[0%]">
          <div className="text-[rgba(28,28,28,1)] font-medium">Received</div>
          <div className="text-[rgba(143,143,143,1)] font-normal">{address}</div>
        </div>
      </div>
      <div className="flex flex-col font-normal text-right justify-center">
        <div className="text-[rgba(28,211,19,1)]">{amount}</div>
        <div className="text-[rgba(143,143,143,1)]">{time}</div>
      </div>
    </article>
  );
};