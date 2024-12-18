import React from 'react';
import clock from '../../assets/images/icons/clock.svg';
import engine from '../../assets/images/icons/engine.svg';
import lineup from '../../assets/images/icons/lineup.svg';
import group from '../../assets/images/icons/group.svg';
import callendarBlue from '../../assets/images/icons/callendar-blue.svg';
import check from '../../assets/images/icons/check.svg';
import coins from '../../assets/images/gestor/coins.png';
import CustomCard, { CardProps } from '../shared/CustomCard';
import CustomVerticalCard, {
  CustomVerticalCardProps,
} from '../shared/CustomVerticalCard';
import list from '../../assets/images/icons/list.svg';
import alert from '../../assets/images/icons/alert.svg';
import pencil from '../../assets/images/icons/pencil.svg';

const cardElements: CardProps[] = [
  {
    icon: clock,
    alt: 'clock',
    textNormal: '',
    textBold: 'Ingresos con libertad de horarios',
  },
  {
    icon: engine,
    alt: 'engine',
    textNormal: '',
    textBold: 'Ganancias claras y justas',
  },
  {
    icon: lineup,
    alt: 'lineup',
    textNormal: '',
    textBold: 'Oportunidad de aumentar tus ganancias',
  },
];
const cardElements2: CardProps[] = [
  {
    icon: group,
    alt: 'group',
    textNormal: '',
    textBold: 'Tener una cartera rentable de clientes',
  },
  {
    icon: callendarBlue,
    alt: 'callendarBlue',
    textNormal: '',
    textBold: 'Flexibilidad para gestionar tu tiempo',
  },
  {
    icon: check,
    alt: 'check',
    textNormal: '',
    textBold: 'Altos estándares de calidad y enfoque en resultados',
  },
];
const verticalCardElements: CustomVerticalCardProps[] = [
  {
    icon: list,
    alt: 'list',
    text: 'Obtén información necesaria para tu gestión desde la app.',
  },
  {
    icon: alert,
    alt: 'alert',
    text: 'Recordatorios de pago automatizados a tus clientes.',
  },
  {
    icon: pencil,
    alt: 'pencil',
    text: 'Evaluación automática para adquirir clientes.',
  },
];

export default function RecurringIncome() {
  return (
    <div className="py-12 xl:pb-64 flex flex-col space-y-12">
      <div className="relative bg-customPurple-500 lg:rounded-t-[70px] py-12 xl:pb-96 flex flex-col items-center">
        <div className="flex flex-col justify-center items-center h-fit">
          <h2 className="text-customPurple-600 text-center font-bold text-2xl w-fit max-w-[504px] uppercase leading-[50px]">
            Tus ingresos recurrentes
          </h2>
          <p className="text-customPurple-600 text-center text-normal w-fit max-w-[297px]">
            Tu portafolio te trae ganancias constantes.
          </p>
        </div>
        <div className="flex justify-center my-5">
          <img src={coins} alt="coins" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col space-y-3">
            <p className="text-normal text-customYellow-500 font-bold text-center">
              Beneficios
            </p>
            {cardElements.map((element: CardProps, index: number) => (
              <CustomCard
                key={`${element.alt}-${index}`}
                alt={element.alt}
                icon={element.icon}
                textNormal={element.textNormal}
                textBold={element.textBold}
                uppercase={true}
              />
            ))}
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-normal text-customPurple-600 font-bold text-center">
              Requisitos
            </p>
            {cardElements2.map((element: CardProps, index: number) => (
              <CustomCard
                key={`${element.alt}-${index}`}
                alt={element.alt}
                icon={element.icon}
                textNormal={element.textNormal}
                textBold={element.textBold}
                uppercase={true}
              />
            ))}
          </div>
        </div>
        <div className="block mt-20 xl:mt-0 xl:absolute xl:block xl:bottom-0 xl:left-0 xl:translate-y-[40%] w-full">
          <div className="flex flex-col justify-center items-center space-y-12">
            <h2 className="text-customPurple-600 text-center font-bold text-2xl w-fit max-w-[504px] px-5 uppercase leading-[50px]">
              Ahora es más fácil gestionar tu cartera
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
      {/* <div className="block xl:hidden">
        <div className="flex flex-col justify-center items-center space-y-24">
          <h2 className="text-customPurple-600 text-center font-bold text-2xl w-fit max-w-[504px] uppercase leading-[50px]">
            Ahora es más fácil gestionar tu cartera
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
      </div> */}
    </div>
  );
}
