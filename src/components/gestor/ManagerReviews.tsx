import React from 'react';
import review1 from '../../assets/images/gestor/review1.png';
import review2 from '../../assets/images/gestor/review2.png';
import review3 from '../../assets/images/gestor/review3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import SwiperElement, { SwiperElementProps } from '../shared/SwiperElement';

const reviewsData: SwiperElementProps[] = [
  {
    author: 'Celedonia R',
    width: '1000',
    imgPerson: review1,
    review:
      'En mi experiencia, la financiera TEU destaca como una de las mejores que he conocido. Además del excelente trato que ofrecen, me han brindado los intereses más bajos que he encontrado. La rapidez con la que aprueban los créditos es impresionante. Sin duda, la recomiendo ampliamente. Agradezco profundamente el excelente servicio que nos brindan.',
  },
  {
    author: 'Jetzain H',
    width: '605',
    imgPerson: review2,
    review:
      'La financiera TEU es una excelente opción, con políticas de comisiones y tasas...',
  },
  {
    author: 'Juan D',
    width: '644',
    imgPerson: review3,
    review:
      'Mi experiencia con la financiera SOMOS ha sido excelente. Destaco su transparencia...',
  },
];

export default function ManagerReviews() {
  return (
    <div className="flex flex-col justify-center items-center space-y-12 pt-12 pb-24">
      <h2 className="text-center sm:text-right text-customPurple-600 font-bold text-2xl uppercase">
        RESEÑAS DE GESTORES
      </h2>
      <div className="relative rounded-xl xl:bg-customPurple-500 xl:max-w-[1075px] w-full">
        <Swiper
          pagination={{
            clickable: true,
            el: '.pagination-1',
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
        <div className="flex absolute bottom-5 xl:bottom-10 w-full xl:w-fit xl:right-1/2 pagination-1 my-custom-pagination z-10" />
      </div>
    </div>
  );
}
