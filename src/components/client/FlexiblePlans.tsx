import React from 'react';
import phone from '../../assets/images/client/phone.png';
import lineup from '../../assets/images/icons/lineup.svg';
import response from '../../assets/images/icons/response.svg';
import dollar from '../../assets/images/icons/dollar.svg';
import renew from '../../assets/images/icons/renew.svg';
import callendar from '../../assets/images/icons/callendar.svg';
import attention from '../../assets/images/icons/attention.svg';
import CustomCard, { CardProps } from '../shared/CustomCard';

const cardElements: CardProps[] = [
  {
    icon: lineup,
    alt: 'lineup',
    textNormal: 'Tasas Desde ',
    textBold: '2.3% semanal',
  },
  {
    icon: response,
    alt: 'response',
    textNormal: '',
    textBold: 'Respuesta inmediata',
  },
  {
    icon: dollar,
    alt: 'dollar',
    textNormal: 'Préstamos de hasta ',
    textBold: '$40,000 pesos',
  },
  {
    icon: renew,
    alt: 'renew',
    textNormal: '',
    textBold: 'Renovaciones sencillas',
  },
  {
    icon: callendar,
    alt: 'callendar',
    textNormal: 'Pagando hasta en',
    textBold: '36 semanas',
  },
  {
    icon: attention,
    alt: 'attention',
    textNormal: '',
    textBold: 'Atención personalizada',
  },
];

export default function FlexiblePlans() {
  return (
    <div className="pt-[300px]">
      <div className="relative bg-customYellow-500 rounded-tl-[70px] xl:h-[680px] py-12 xl:py-0">
        <div className="xl:absolute xl:top-0 xl:left-0 xl:-translate-y-1/2 w-full grid grid-cols-1 xl:grid-cols-2 justify-center gap-6">
          <div className="relative flex justify-center">
            <img src={phone} alt="phone" />
            <div className="absolute top-0 left-20">
              <h2 className="text-customPurple-600 text-center font-bold text-2xl uppercase rotate-[-35deg] w-fit">
                Planes
                <br />
                flexibles
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-customPurple-600 text-normal text-center max-w-[413px]">
              La mejor tasa de interés para que le saques provecho a tu dinero.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
              {cardElements.map((element: CardProps, index: number) => (
                <CustomCard
                  key={`${element.alt}-${index}`}
                  alt={element.alt}
                  icon={element.icon}
                  textNormal={element.textNormal}
                  textBold={element.textBold}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
