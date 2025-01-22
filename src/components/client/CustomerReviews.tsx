import React from 'react';
import review1 from '../../assets/images/client/review1.png';
import review2 from '../../assets/images/client/review2.png';
import review3 from '../../assets/images/client/review3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import SwiperElement, { SwiperElementProps } from '../shared/SwiperElement';
import SwiperElementRes from '../shared/SwiperElementRes';

const reviewsData: SwiperElementProps[] = [
  {
    author: 'Erika N',
    width: '1000',
    imgPerson: review1,
    review:
      'Agradezco a TEU por su apoyo financiero y confianza en mi negocio. Sus préstamos me han permitido crecer y su servicio al cliente es excelente. Estoy muy agradecido por esta oportunidad.',
  },
  {
    author: 'Franco L',
    width: '426',
    imgPerson: review2,
    review:
      'TEU es una gran oportunidad de microcréditos accesible de inmediato...',
  },
  {
    author: 'Rosalba M',
    width: '408',
    imgPerson: review3,
    review:
      'La financiera TEU me ha ayudado con un crédito para mi negocio ...',
  },
];
const reviewsDataRes: SwiperElementProps[] = [
  {
    author: 'Erika N',
    width: '1000',
    imgPerson: review1,
    review:
      'Agradezco a TEU por su apoyo financiero y confianza en mi negocio. Sus préstamos me han permitido crecer y su servicio al cliente es excelente. Estoy muy agradecido por esta oportunidad.',
  },
  {
    author: 'Erika N',
    width: '1000',
    imgPerson: review1,
    review:
      'Agradezco a TEU por su apoyo financiero y confianza en mi negocio. Sus préstamos me han permitido crecer y su servicio al cliente es excelente. Estoy muy agradecido por esta oportunidad.',
  },
  {
    author: 'Franco L',
    width: '426',
    imgPerson: review2,
    review:
      'TEU es una gran oportunidad de microcréditos accesible de inmediato...',
  },
  {
    author: 'Franco L',
    width: '426',
    imgPerson: review2,
    review:
      'TEU es una gran oportunidad de microcréditos accesible de inmediato...',
  },
  {
    author: 'Rosalba M',
    width: '408',
    imgPerson: review3,
    review:
      'La financiera TEU me ha ayudado con un crédito para mi negocio ...',
  },
  {
    author: 'Rosalba M',
    width: '408',
    imgPerson: review3,
    review:
      'La financiera TEU me ha ayudado con un crédito para mi negocio ...',
  },
];

export default function CustomerReviews() {
  return (
    <div className="flex flex-col justify-center items-center space-y-12 pt-12 xl:pt-56">
      <h2 className="text-center sm:text-right text-customPurple-600 font-bold text-2xl uppercase">
        RESEÑAS DE CLIENTES
      </h2>
      <div className="hidden xl:flex relative rounded-xl xl:bg-customPurple-500 xl:max-w-[1075px] w-full">
        <Swiper
          pagination={{
            clickable: true,
            el: '.pagination-2',
          }}
          modules={[Pagination]}
        >
          {reviewsData.map((review: SwiperElementProps, index: number) => (
            <SwiperSlide key={`${review.author}-${index}`}>
              <SwiperElement
                author={review.author}
                imgPerson={review.imgPerson}
                review={review.review}
                width={review.width}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex absolute bottom-5 xl:bottom-10 w-full xl:w-fit xl:right-1/2 pagination-2 my-custom-pagination z-10" />
      </div>
      <div className="flex xl:hidden relative rounded-xl xl:bg-customPurple-500 xl:max-w-[1075px] w-full">
        <Swiper
          pagination={{
            clickable: true,
            el: '.pagination-5',
          }}
          modules={[Pagination]}
        >
          {reviewsDataRes.map((review: SwiperElementProps, index: number) => (
            <SwiperSlide key={`${review.author}-${index}`}>
              <SwiperElementRes
                author={review.author}
                imgPerson={review.imgPerson}
                review={review.review}
                width={review.width}
                index={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex absolute bottom-5 xl:bottom-10 w-full xl:w-fit xl:right-1/2 pagination-5 my-custom-pagination z-10" />
      </div>
    </div>
  );
}
