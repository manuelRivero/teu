import React from 'react';

export interface CardProps {
  icon: string;
  alt: string;
  textNormal: string;
  textBold: string;
}

export default function CustomCard({
  icon,
  alt,
  textNormal,
  textBold,
}: CardProps) {
  return (
    <div className="flex flex-row items-center space-x-7 bg-white w-[276px] h-[87px] px-6 py-4 rounded-xl drop-shadow-lg">
      <img src={icon} alt={alt} />
      <p className="text-xs text-customPurple-600">
        {textNormal}
        <span className="font-bold">{textBold}</span>
      </p>
    </div>
  );
}
