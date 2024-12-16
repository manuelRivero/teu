import React from 'react';
import content from '../../assets/images/client/content.svg';
import teu from '../../assets/images/logos/teu-logo.svg';

export interface SwiperElementProps {
  imgPerson: string;
  review: string;
  author: string;
  width?: string;
}

export default function SwiperElement({
  imgPerson,
  review,
  author,
  width = '403',
}: SwiperElementProps) {
  const truncateString = (text: string): string => {
    const maxLength = 70;
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return (
    <div className="flex justify-center items-center xl:justify-start xl:items-start">
      <div className="relative w-fit max-w-[353px]">
        <img src={imgPerson} alt="" style={{ width: `${width}px` }} />
        <div className="absolute top-0 left-0 w-full h-full p-6 flex items-end justify-center">
          <div className="relative">
            <img src={content} alt="" />
            <div className="absolute top-[12%] xl:top-0 left-[10%] xl:left-0 xl:translate-x-1/4 xl:translate-y-1/3">
              <img src={teu} alt="" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[110px] flex justify-center items-center px-3">
              <p className="text-tight sm:text-xs text-customPurple-600 leading-4">
                “{truncateString(review)}”{' '}
                <span className="font-bold">- {author}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:block">
        <p className="text-normal text-customPurple-600 italic px-24 pt-24">
          <span className="font-bold">“</span>
          {review}
          <span className="font-bold">“</span>
        </p>
        <p className="text-small font-bold text-right text-customPurple-600 italic mt-10 px-32">
          - {author}
        </p>
      </div>
    </div>
  );
}
