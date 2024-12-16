import React from 'react';
import review1 from '../../assets/images/client/review1.png';
import content from '../../assets/images/client/content.svg';
import teu from '../../assets/images/logos/teu-logo.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';

export default function CustomerReviews() {
  return (
    <div className="flex flex-col justify-center items-center space-y-12 pt-56">
      <h2 className="text-customPurple-600 font-bold text-2xl uppercase">
        RESEÑAS DE CLIENTES
      </h2>
      <div className="relative rounded-xl bg-customPurple-500 max-w-[1075px] w-full">
        <Swiper
          pagination={{
            clickable: true,
            el: '.pagination',
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div className="flex">
              <div className="relative w-fit">
                <img src={review1} alt="" style={{ width: '994px' }} />
                <div className="absolute top-0 left-0 w-full h-full p-6 flex items-end justify-center">
                  <div className="relative">
                    <img src={content} alt="" />
                    <div className="absolute top-0 left-0 translate-x-1/4 translate-y-1/3">
                      <img src={teu} alt="" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-[110px] flex justify-center items-center px-3">
                      <p className="text-xs text-customPurple-600 leading-4">
                        “TEU es una gran oportunidad de microcréditos accesible
                        de inmediato...”{' '}
                        <span className="font-bold">- Franco L</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-normal text-customPurple-600 italic px-24 pt-24">
                  <span className="font-bold">“</span>Agradezco a TEU por su
                  apoyo financiero y confianza en mi negocio. Sus préstamos me
                  han permitido crecer y su servicio al cliente es excelente.
                  Estoy muy agradecido por esta oportunidad.
                  <span className="font-bold">“</span>
                </p>
                <p className="text-small font-bold text-right text-customPurple-600 italic mt-10 px-32">
                  - Erika N
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex">
              <div className="relative w-fit">
                <img src={review1} alt="" style={{ width: '994px' }} />
                <div className="absolute top-0 left-0 w-full h-full p-6 flex items-end justify-center">
                  <div className="relative">
                    <img src={content} alt="" />
                    <div className="absolute top-0 left-0 translate-x-1/4 translate-y-1/3">
                      <img src={teu} alt="" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-[110px] flex justify-center items-center px-3">
                      <p className="text-xs text-customPurple-600 leading-4">
                        “TEU es una gran oportunidad de microcréditos accesible
                        de inmediato...”{' '}
                        <span className="font-bold">- Franco L</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-normal text-customPurple-600 italic px-24 pt-24">
                  <span className="font-bold">“</span>Agradezco a TEU por su
                  apoyo financiero y confianza en mi negocio. Sus préstamos me
                  han permitido crecer y su servicio al cliente es excelente.
                  Estoy muy agradecido por esta oportunidad.
                  <span className="font-bold">“</span>
                </p>
                <p className="text-small font-bold text-right text-customPurple-600 italic mt-10 px-32">
                  - Erika N
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolute bottom-10 right-1/2 pagination my-custom-pagination" />
      </div>
    </div>
  );
}
