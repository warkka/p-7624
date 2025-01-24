import React from 'react';

export const BillsSection: React.FC = () => {
  return (
    <section className="flex min-h-[179px] w-full max-w-[353px] items-stretch gap-2 whitespace-nowrap mt-4">
      <article className="bg-white text-[rgba(28,28,28,1)] w-44 h-44 flex-1 shrink basis-[0%] px-2.5 py-[13px] rounded-3xl">
        <div className="flex w-full items-stretch gap-2 text-xl font-normal leading-[21px]">
          <div className="bg-[rgba(38,237,28,1)] flex w-12 shrink-0 h-12 my-auto rounded-[5000px]" />
          <h3 className="flex-1 shrink basis-[0%]">Dollars</h3>
        </div>
        <div className="text-2xl font-medium mt-[74px]">$100.00</div>
      </article>

      <article className="bg-white flex flex-col items-stretch justify-between w-44 h-44 flex-1 shrink basis-[0%] px-2.5 py-[13px] rounded-3xl">
        <div className="flex w-full items-stretch gap-2 text-xl text-[rgba(28,28,28,1)] font-normal leading-[21px]">
          <div className="bg-[rgba(38,237,28,1)] flex w-12 shrink-0 h-12 my-auto rounded-[5000px]" />
          <h3 className="flex-1 shrink basis-[0%]">
            Dollar
            <br />
            Savings
          </h3>
        </div>
        <div className="font-medium mt-[45px]">
          <div className="text-[rgba(28,211,19,1)] text-xl">+$15,000</div>
          <div className="text-[rgba(28,28,28,1)] text-2xl">$37,000</div>
        </div>
      </article>
    </section>
  );
};