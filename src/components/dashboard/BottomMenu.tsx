import React from 'react';
import { Home, Settings } from 'lucide-react';

export const BottomMenu: React.FC = () => {
  return (
    <nav className="bg-white flex min-h-[87px] w-full max-w-[353px] items-stretch overflow-hidden text-base font-normal whitespace-nowrap text-center leading-[1.2] justify-center mt-[38px] rounded-[32px]">
      <button className="bg-white flex flex-col items-center text-[rgba(28,211,19,1)] justify-center flex-1 shrink basis-[0%]">
        <Home className="w-9 h-9" />
        <div>Home</div>
      </button>
      <button className="bg-white flex flex-col items-center text-[rgba(28,28,28,1)] justify-center flex-1 shrink basis-[0%]">
        <Settings className="w-9 h-9" />
        <div>Settings</div>
      </button>
    </nav>
  );
};