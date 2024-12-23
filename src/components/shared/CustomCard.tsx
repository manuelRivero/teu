import React from 'react';

export interface CardProps {
  icon: string;
  alt: string;
  textNormal: string;
  textBold: string;
  uppercase?: boolean;
}

export default function CustomCard({
  icon,
  alt,
  textNormal,
  textBold,
  uppercase = false,
}: CardProps) {
  return (
    <div className="flex flex-row items-center space-x-7 bg-white w-[286px] h-[87px] px-6 py-4 rounded-xl drop-shadow-lg">
      <img src={icon} alt={alt} />
      <p
        className={`text-2xs text-customPurple-600 leading-4 ${uppercase && 'uppercase'}`}
      >
        {textNormal}
        <span className="font-bold">{textBold}</span>
      </p>
    </div>
  );
}
