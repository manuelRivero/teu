import React from 'react';
import CustomButton from '../shared/CustomButton';
import heroImg from '../../assets/images/client/hero-img.png';
import heroImgRes from '../../assets/images/client/hero-img-res.png';
import { scrollToSection } from '../../utils/ScrollToSection';

export default function ClientHero() {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-fit">
        <img src={heroImg} alt="Teu" className="hidden lg:block rounded-2xl" />
        <img
          src={heroImgRes}
          alt="Teu"
          className="block lg:hidden rounded-2xl"
        />
        <div
          className="hidden lg:block absolute top-0 left-0 w-full h-full rounded-2xl"
          style={{
            background: `linear-gradient(
                to right,
                #1C1346 0%,
                #1C13464D 20%,
                #1C134600 40%,
                #C8E3574D 85%,
                #C8E357 100%
              )`,
          }}
        >
          <div className="hidden lg:block px-8 py-10 xl:px-16 xl:py-20">
            <div className="flex flex-col space-y-6 max-w-[420px]">
              <h1 className="text-white text-3xl font-black uppercase leading-[70px]">
                CRÉDITO INDIVIDUAL AL INSTANTE
              </h1>
              <p className="text-white text-xl leading-10">
                Tu negocio crece, tu crédito crece,{' '}
                <span className="font-bold">tú creces.</span>
              </p>
              <div className="pt-8">
                <CustomButton
                  bgColor="customYellow-500"
                  text="Solicita tu crédito"
                  textColor="customPurple-600"
                  cb={() => scrollToSection('solicitar')}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="block lg:hidden absolute top-0 left-0 w-full h-full rounded-2xl"
          style={{
            background: `linear-gradient(
                to top,
                #1C1346 0%,
                #1C13464D 40%,
                #1C134600 50%,
                #C8E3574D 85%,
                #C8E357 100%
              )`,
          }}
        >
          <div className="px-4 py-10 h-full">
            <div className="flex flex-col space-y-6 justify-between h-full">
              <h1 className="text-white text-2xxl font-black uppercase leading-[70px]">
                CRÉDITO INDIVIDUAL AL INSTANTE
              </h1>
              <div>
                <p className="text-white text-xl leading-10">
                  Tu negocio crece, tu crédito crece,{' '}
                  <span className="font-bold">tú creces.</span>
                </p>
                <div className="flex justify-center pt-8">
                  <CustomButton
                    bgColor="customYellow-500"
                    text="Solicita tu crédito"
                    textColor="customPurple-600"
                    cb={() => scrollToSection('solicitar')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
