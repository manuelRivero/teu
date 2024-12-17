import React from 'react';
import circle from '../../assets/images/logos/circle.svg';
import walmart from '../../assets/images/logos/walmart.svg';
import bbva from '../../assets/images/logos/bbva.svg';
import eleven from '../../assets/images/logos/eleven.svg';
import telecom from '../../assets/images/logos/telecom.svg';
import santander from '../../assets/images/logos/santander.svg';
import banorte from '../../assets/images/logos/banorte.svg';
import oxxo from '../../assets/images/logos/oxxo.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

const options: { element1: string; element2: string }[] = [
  { element1: circle, element2: telecom },
  { element1: walmart, element2: santander },
  { element1: bbva, element2: banorte },
  { element1: eleven, element2: oxxo },
];

export default function PaymentOptions() {
  return (
    <div className="bg-customPurple-600 sm:rounded-tr-[70px] p-10 pb-20 sm:p-20 flex flex-col space-y-20">
      <div>
        <h2 className="text-2xl sm:text-2xxl text-white font-bold sm:max-w-[494px] uppercase mb-5">
          Diferentes opciones de pago
        </h2>
        <p className="text-normal text-white">
          Por: transferencia, sucursales bancarias, tiendas de conveniencia.
        </p>
      </div>
      <Swiper
        breakpoints={{
          1300: { slidesPerView: 4 },
          1000: { slidesPerView: 3 },
          800: { slidesPerView: 2 },
          500: { slidesPerView: 1 },
        }}
        spaceBetween={80}
        pagination={{
          clickable: true,
          el: '.pagination',
        }}
        modules={[Pagination]}
        className="w-full"
      >
        {options.map(
          (option: { element1: string; element2: string }, index: number) => (
            <SwiperSlide key={index} className="payment-options-slide">
              <div className="flex flex-col space-y-16 justify-center items-center h-full">
                <img src={option.element1} alt={option.element1} />
                <img src={option.element2} alt={option.element2} />
              </div>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </div>
  );
}
