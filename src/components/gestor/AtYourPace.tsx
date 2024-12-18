import React from 'react';
import phone from '../../assets/images/gestor/phone.png';

export default function AtYourPace() {
  return (
    <div className="bg-customYellow-500 grid grid-cols-1 lg:grid-cols-2 py-20 px-10 lg:py-0">
      <div className="hidden lg:flex justify-end items-end">
        <img src={phone} alt="phone" />
      </div>
      <div className="flex flex-col justify-center items-start">
        <h2 className="text-customPurple-600 text-center lg:text-start w-full text-3xl font-bold uppercase leading-[60px] lg:leading-[50px]">
          A tu ritmo
        </h2>
        <h3 className="text-customPurple-600 text-center lg:text-start w-full text-2xxl font-bold italic">
          Sé tu propio jefe
        </h3>
        <p className="text-customPurple-600 text-center lg:text-start w-full text-xl">
          Gana por lo que trabajes.
        </p>
      </div>
    </div>
  );
}
