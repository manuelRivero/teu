import React from 'react';
import content from '../../assets/images/client/content.svg';
import teu from '../../assets/images/logos/teu-logo.svg';

export interface SwiperElementProps {
  imgPerson: string;
  review: string;
  author: string;
  width?: string;
  index: number;
}

export default function SwiperElementRes({
  imgPerson,
  review,
  author,
  width = '403',
  index,
}: SwiperElementProps) {
  const truncateString = (text: string): string => {
    const maxLength = 70;
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return (
    <div className="xl:grid xl:grid-cols-3 flex justify-center h-full">
      <div
        className={`${index % 2 === 0 ? 'hidden' : 'block'} relative w-fit max-w-[353px] col-span-1`}
      >
        <img src={imgPerson} alt="Teu Person" style={{ width: `${width}px` }} />
        <div className="absolute top-0 left-0 w-full h-full px-6 py-16 xl:py-6 flex items-end justify-center">
          <div className="relative">
            <img src={content} alt="content" />
            <div className="absolute top-[12%] xl:top-0 left-[10%] xl:left-0 xl:translate-x-1/4 xl:translate-y-1/3">
              <img src={teu} alt="teu" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[140px] flex justify-center items-center px-3">
              <p className="text-xl text-customPurple-600 leading-4">
                <span className="font-bold">- {author}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${index % 2 !== 0 ? 'hidden' : 'block'} relative w-fit max-w-[353px] h- col-span-1 bg-customPurple-500 rounded-2xl py-10`}
      >
        <div className="flex flex-col justify-between xl:space-y-3 items-center px-10 h-full col-span-2">
          <p className="text-smaller text-customPurple-600 italic">
            <span className="font-bold">“</span>
            {review}
            <span className="font-bold">“</span>
          </p>
          <p className="text-xs font-bold text-customPurple-600 italic w-full text-end pb-10">
            - {author}
          </p>
        </div>
      </div>
    </div>
  );
}
