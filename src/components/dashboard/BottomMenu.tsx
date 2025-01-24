import React from 'react';

export const BottomMenu: React.FC = () => {
  return (
    <nav className="bg-white flex min-h-[87px] w-full max-w-[353px] items-stretch overflow-hidden text-base font-normal whitespace-nowrap text-center leading-[1.2] justify-center mt-[38px] rounded-[32px]">
      <button className="bg-white flex flex-col items-stretch text-[rgba(28,211,19,1)] justify-center flex-1 shrink basis-[0%]">
        <div className="self-center flex min-h-9 w-9" />
        <div>Home</div>
      </button>
      <button className="bg-white flex flex-col items-stretch text-[rgba(28,28,28,1)] justify-center flex-1 shrink basis-[0%]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/b5b214468be0436aa9704971aeb73e67/fced3794ee5dc60c31317d7cf48833cc82a75775b89cf80f354e7e030a4a3d44?placeholderIfAbsent=true" className="aspect-[1] object-contain w-9 self-center" alt="" />
        <div>Settings</div>
      </button>
    </nav>
  );
};