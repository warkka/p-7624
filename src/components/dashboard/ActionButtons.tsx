import React from 'react';

interface ActionButton {
  label: string;
}

const buttons: ActionButton[] = [
  { label: 'Send' },
  { label: 'Add money' },
  { label: 'Request' }
];

export const ActionButtons: React.FC = () => {
  return (
    <section className="flex min-h-[72px] w-full max-w-[353px] items-stretch gap-2 text-base text-[rgba(28,28,28,1)] font-medium text-center leading-[1.2] mt-2">
      {buttons.map((button) => (
        <button
          key={button.label}
          className="bg-white flex flex-col items-center whitespace-nowrap justify-center flex-1 shrink basis-[0%] py-2 rounded-3xl hover:bg-gray-50 transition-colors"
        >
          <div className="flex min-h-7 w-7" />
          <span className="mt-1">{button.label}</span>
        </button>
      ))}
    </section>
  );
};