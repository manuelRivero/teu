import React from 'react';
import phone from '../../assets/images/client/phone.png';
import lineup from '../../assets/images/icons/lineup.svg';
import response from '../../assets/images/icons/response.svg';
import dollar from '../../assets/images/icons/dollar.svg';
import renew from '../../assets/images/icons/renew.svg';
import callendar from '../../assets/images/icons/callendar.svg';
import attention from '../../assets/images/icons/attention.svg';
import CustomCard, { CardProps } from '../shared/CustomCard';
import CustomVerticalCard, {
  CustomVerticalCardProps,
} from '../shared/CustomVerticalCard';
import document from '../../assets/images/icons/document.svg';
import approved from '../../assets/images/icons/approved.svg';
import idDoc from '../../assets/images/icons/idDoc.svg';

const cardElements: CardProps[] = [
  {
    icon: lineup,
    complementText: 'paga cada vez menos por tu prestamo.',
    alt: 'lineup',
    textNormal: 'Tasas Desde ',
    textBold: '2.3% semanal',
  },
  {
    icon: response,
    complementText: 'Aprobación de tu solicitud al momento.',
    alt: 'response',
    textNormal: '',
    textBold: 'Respuesta inmediata',
  },
  {
    icon: dollar,
    complementText: 'Creces tu como cliente y linea de crédito también.',
    alt: 'dollar',
    textNormal: 'Préstamos de hasta ',
    textBold: '$40,000 pesos',
  },
  {
    icon: renew,
    complementText: 'No más complicaciones al momento de renovar.',
    alt: 'renew',
    textNormal: '',
    textBold: 'Renovaciones sencillas',
  },
  {
    icon: callendar,
    complementText: 'Pagos flexibles para pagar a tu ritmo.',
    alt: 'callendar',
    textNormal: 'Pagando hasta en',
    textBold: '36 semanas',
  },
  {
    icon: attention,
    complementText: 'te recordamos para que no te atrases en tu pago.',
    alt: 'attention',
    textNormal: '',
    textBold: 'Atención personalizada',
  },
];
const verticalCardElements: CustomVerticalCardProps[] = [
  {
    icon: document,
    alt: 'document',
    text: 'Sin importar tu historial crediticio, te ayudamos a mejorarlo.',
  },
  {
    icon: approved,
    alt: 'approved',
    text: 'Proceso rápido y sencillo, 100% digital.',
  },
  {
    icon: idDoc,
    alt: 'idDoc',
    text: 'Solo ten a la mano tu identificación oficial vigente.',
  },
];

export default function FlexiblePlans() {
  return (
    <div className="pt-12 xl:pt-[300px] flex flex-col space-y-12">
      <div className="relative bg-customYellow-500 lg:rounded-tl-[70px] xl:h-[680px] py-12 xl:py-0">
        <div className="xl:absolute xl:top-0 xl:left-0 xl:-translate-y-1/2 w-full grid grid-cols-1 xl:grid-cols-2 justify-center gap-6">
          <div className="relative sm:flex justify-center">
            <div className="block sm:hidden">
              <h2 className="text-customPurple-600 text-center font-bold text-2xl uppercase rotate-[-20deg] w-fit">
                Planes
                <br />
                flexibles
              </h2>
            </div>
            <img src={phone} alt="phone" />
            <div className="hidden sm:block absolute top-0 left-20">
              <h2 className="text-customPurple-600 text-center font-bold text-2xl uppercase rotate-[-35deg] w-fit">
                Planes
                <br />
                flexibles
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-customPurple-600 text-normal text-center max-w-[413px] mt-5 mb-10 sm:my-0">
              La mejor tasa de interés para que le saques provecho a tu dinero.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
              {cardElements.map((element: CardProps, index: number) => (
                <CustomCard
                  key={`${element.alt}-${index}`}
                  alt={element.alt}
                  icon={element.icon}
                  textNormal={element.textNormal}
                  textBold={element.textBold}
                  complementText={element.complementText}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="hidden xl:absolute xl:block bottom-0 left-0 translate-y-[40%] w-full">
          <div className="flex flex-col justify-center items-center space-y-24">
            <h2 className="text-customPurple-600 text-center font-bold text-2xl w-fit">
              ¿REQUISITOS? <span className="font-normal">Ya es tuyo.</span>
            </h2>
            <div className="flex flex-col md:flex-row space-y-8 md:space-x-8 md:space-y-0">
              {verticalCardElements.map(
                (element: CustomVerticalCardProps, index: number) => (
                  <CustomVerticalCard
                    key={`${element.alt}-${index}`}
                    alt={element.alt}
                    icon={element.icon}
                    text={element.text}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="block xl:hidden">
        <div className="flex flex-col justify-center items-center space-y-24">
          <h2 className="text-customPurple-600 text-center font-bold text-2xl w-fit">
            ¿REQUISITOS? <span className="font-normal">Ya es tuyo.</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
            {verticalCardElements.map(
              (element: CustomVerticalCardProps, index: number) => (
                <CustomVerticalCard
                  key={`${element.alt}-${index}`}
                  alt={element.alt}
                  icon={element.icon}
                  text={element.text}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
