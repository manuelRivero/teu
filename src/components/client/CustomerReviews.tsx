import React from 'react';
import review1 from '../../assets/images/client/review1.png';
import review2 from '../../assets/images/client/review2.png';
import review3 from '../../assets/images/client/review3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import SwiperElement, { SwiperElementProps } from '../shared/SwiperElement';

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

export default function CustomerReviews() {
  return (
    <div className="flex flex-col justify-center items-center space-y-12 pt-56">
      <h2 className="text-customPurple-600 font-bold text-2xl uppercase">
        RESEÑAS DE CLIENTES
      </h2>
      <div className="relative rounded-xl xl:bg-customPurple-500 xl:max-w-[1075px] w-full">
        <Swiper
          pagination={{
            clickable: true,
            el: '.pagination',
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
        <div className="hidden xl:flex absolute bottom-10 right-1/2 pagination my-custom-pagination" />
      </div>
    </div>
  );
}
