import React from 'react';

export interface CardProps {
  icon: string;
  alt: string;
  textNormal: string;
  textBold: string;
  uppercase?: boolean;
  complementText?: string;
}

export default function CustomCard({
  icon,
  alt,
  textNormal,
  textBold,
  uppercase = false,
  complementText = '',
}: CardProps) {
  return (
    <div className="flex flex-row items-center space-x-3 bg-white w-[286px] h-[87px] pl-3 py-4 rounded-xl drop-shadow-lg hover:bg-customPurple-600 transition-all group">
      <img src={icon} alt={alt} />
      <div>
        <p
          className={`uppercase text-2xs text-customPurple-600 group-hover:text-white pr-2 group-hover:font-bold transition-all leading-4 ${uppercase && 'uppercase'}`}
        >
          {textNormal}
          <span className="font-bold"> {textBold}</span>
        </p>
        <p
          className={`hidden group-hover:block uppercase text-2xs text-white leading-4 ${uppercase && 'uppercase'}`}
        >
          {complementText}
        </p>
      </div>
    </div>
  );
}
