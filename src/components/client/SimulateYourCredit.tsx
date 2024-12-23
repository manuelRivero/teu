import React from 'react';
import CustomButton from '../shared/CustomButton';
import left from '../../assets/images/left.png';
import right from '../../assets/images/right.png';

export default function SimulateYourCredit() {
  return (
    <div className="relative">
      <div className="flex justify-center items-center px-5">
        <div className="flex flex-col space-y-7 justify-center items-center max-w-[480px]">
          <h2 className="text-customPurple-600 font-bold text-center lg:text-right text-2xl uppercase">
            Simula tu crédito
          </h2>
          <p className="text-customPurple-600 text-normal">
            Monto a solicitar:
          </p>
          <div className="bg-customPurple-600 w-full py-3 rounded-xl text-white text-2xl text-center font-black">
            <p>$ 5,000.00</p>
          </div>
          <div className="flex flex-col justify-between rounded-xl p-px bg-white drop-shadow-lg">
            <div className="flex justify-center items-center p-3 py-7">
              <p className="text-smaller text-customBlack-500 font-medium leading-7">
                ¿En cuantas semanas quieres pagar?
              </p>
            </div>
            <div className="flex justify-between px-8 items-center p-[14px] rounded-xl bg-customBlue-600">
              <p className="text-xl text-white font-bold">16 semanas</p>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <div className="flex flex-col justify-between rounded-xl p-px bg-white drop-shadow-lg">
              <div className="flex justify-center items-center p-3">
                <p className="text-smaller text-customBlack-500 font-medium leading-7">
                  Pago por semana en el plazo seleccionado:
                </p>
              </div>
              <div className="flex justify-between px-8 items-center p-[14px] rounded-xl bg-customBlue-600">
                <p className="text-xl text-white font-bold">$0</p>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-xl p-px bg-white drop-shadow-lg">
              <div className="flex justify-center items-center p-3">
                <p className="text-smaller text-customBlack-500 font-medium leading-7">
                  Monto total a pagar en el plazo seleccionado:
                </p>
              </div>
              <div className="flex justify-between px-8 items-center p-[14px] rounded-xl bg-customBlue-600">
                <p className="text-xl text-white font-bold">$0</p>
              </div>
            </div>
          </div>
          <div className="w-fit pt-10">
            <CustomButton
              textColor="white"
              text="Solicita tu crédito"
              cb={() => {}}
              bgColor="customBlue-500"
            />
          </div>
        </div>
      </div>
      <div className="hidden xl:block absolute top-16 left-0">
        <img src={left} alt="" />
      </div>
      <div className="hidden xl:block absolute top-1/4 right-0">
        <img src={right} alt="" />
      </div>
    </div>
  );
}
