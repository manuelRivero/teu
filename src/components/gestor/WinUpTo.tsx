import React from 'react';
import CustomButton from '../shared/CustomButton';

export default function WinUpTo() {
  return (
    <div className="flex justify-center items-center px-5 lg:pt-8">
      <div className="flex flex-col space-y-7 justify-center items-center max-w-[480px]">
        <h2 className="text-customPurple-600 font-bold text-center lg:text-right text-2xl uppercase">
          Llega a ganar hasta
        </h2>
        <div className="bg-customPurple-600 w-fit py-3 px-10 rounded-xl text-white text-2xl text-center font-black">
          <p>$ 28,000.00</p>
        </div>
        <p className="text-customPurple-600 font-bold text-center lg:text-right text-2xl uppercase">
          Mensuales <span className="text-customBlue-500">*</span>
        </p>
        <p className="text-customPurple-600 text-tight text-center">
          *Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}
