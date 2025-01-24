import React from 'react';
import { BalanceCard } from '@/components/dashboard/BalanceCard';
import { ActionButtons } from '@/components/dashboard/ActionButtons';
import { BillsSection } from '@/components/dashboard/BillsSection';
import { TransactionHistory } from '@/components/dashboard/TransactionHistory';
import { BottomMenu } from '@/components/dashboard/BottomMenu';

const Index = () => {
  return (
    <main className="bg-[rgba(245,245,247,1)] flex max-w-[480px] w-full flex-col overflow-hidden items-center mx-auto pt-[63px] pb-[30px]">
      <BalanceCard balance="$37,100.00" percentage="+12.02%" />
      <ActionButtons />
      <BillsSection />
      <TransactionHistory />
      <BottomMenu />
    </main>
  );
};

export default Index;