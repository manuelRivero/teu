import React from 'react';

export interface CustomVerticalCardProps {
  text: string;
  icon: string;
  alt: string;
}

export default function CustomVerticalCard({
  text,
  icon,
  alt,
}: CustomVerticalCardProps) {
  return (
    <div className="relative flex justify-center items-center w-[302px] h-[314px] bg-white rounded-xl pt-20 px-4 drop-shadow-lg">
      <p className="text-normal text-customPurple-600 text-center leading-8">
        {text}
      </p>
      <div className="absolute top-0 left-1/2 w-[116px] h-[116px] bg-customPurple-500 rounded-[40px] -translate-y-1/3 -translate-x-1/2 flex justify-center items-center">
        <img src={icon} alt={alt} />
      </div>
    </div>
  );
}
