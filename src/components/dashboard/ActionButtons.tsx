import React from 'react';
import { Send, PlusCircle, ArrowLeftRight } from 'lucide-react';

interface ActionButton {
  label: string;
  icon: React.ReactNode;
}

const buttons: ActionButton[] = [
  { label: 'Send', icon: <Send className="w-7 h-7" /> },
  { label: 'Add money', icon: <PlusCircle className="w-7 h-7" /> },
  { label: 'Request', icon: <ArrowLeftRight className="w-7 h-7" /> }
];

export const ActionButtons: React.FC = () => {
  return (
    <section className="flex min-h-[72px] w-full max-w-[353px] items-stretch gap-2 text-base text-[rgba(28,28,28,1)] font-medium text-center leading-[1.2] mt-2">
      {buttons.map((button) => (
        <button
          key={button.label}
          className="bg-white flex flex-col items-center whitespace-nowrap justify-center flex-1 shrink basis-[0%] py-2 rounded-3xl hover:bg-gray-50 transition-colors"
        >
          {button.icon}
          <span className="mt-1">{button.label}</span>
        </button>
      ))}
    </section>
  );
};