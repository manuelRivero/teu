import React, { useState } from 'react';
import CustomButton from '../shared/CustomButton';
import left from '../../assets/images/left.png';
import right from '../../assets/images/right.png';
import { NumericFormat } from 'react-number-format';

export default function SimulateYourCredit() {
  const MAX_VALUE = 5000; // Valor máximo permitido
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('16');
  const [value, setValue] = useState<number>(5000);

  const handleSelected = (option: string) => {
    setSelected(option);
    setShowOptions(false);
  };
  return (
    <div className="relative" id="solicitar">
      <div className="flex justify-center items-center px-5">
        <div className="flex flex-col space-y-7 justify-center items-center max-w-[480px]">
          <h2 className="text-customPurple-600 font-bold text-center lg:text-right text-2xl uppercase">
            Simula tu crédito
          </h2>
          <p className="text-customPurple-600 text-normal">
            Monto a solicitar:
          </p>
          {/* <input
            type="text"
            value={value}
            onChange={handleChange}
            className="bg-customPurple-600 w-full py-3 rounded-xl text-white text-2xl text-center font-black"
          /> */}
          <NumericFormat
            value={value}
            thousandSeparator=","
            decimalSeparator="."
            prefix="$"
            decimalScale={2}
            fixedDecimalScale={true}
            allowNegative={false}
            isAllowed={(values) => {
              const { floatValue } = values;
              // Validar si floatValue está definido y es menor o igual a 5000
              return floatValue === undefined || floatValue <= 5000;
            }}
            onValueChange={(values) => {
              const { floatValue } = values;
              // Actualizar el estado solo si floatValue no es undefined, de lo contrario, usar 0
              setValue(floatValue || 0);
            }}
            className="bg-customPurple-600 w-full py-3 rounded-xl text-white text-2xl text-center font-black"
            placeholder="$0.00"
          />
          <div className="flex flex-col justify-between rounded-xl p-px bg-white drop-shadow-lg">
            <div className="flex justify-center items-center p-3 py-7">
              <p className="text-smaller text-customBlack-500 font-medium leading-7">
                ¿En cuantas semanas quieres pagar?
              </p>
            </div>
            <div className="relative">
              <button
                className="w-full bg-customBlue-600 text-white font-bold text-xl rounded-xl p-[14px] flex justify-between items-center"
                onClick={() => setShowOptions((prev) => !prev)}
              >
                {selected} semanas
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M31.125 15L33.75 17.4831L22.5 28.125L11.25 17.4831L13.875 15L22.5 23.1588L31.125 15Z"
                    fill="white"
                  />
                </svg>
              </button>
              {showOptions && (
                <ul className="absolute left-0 right-0 bg-white rounded-xl shadow-lg z-20">
                  <li
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSelected('16')}
                  >
                    16 semanas
                  </li>
                  <li
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSelected('20')}
                  >
                    20 semanas
                  </li>
                  <li
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSelected('24')}
                  >
                    24 semanas
                  </li>
                  <li
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSelected('28')}
                  >
                    28 semanas
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="flex justify-center space-x-4 relative -z-10">
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
        <img src={left} alt="left" />
      </div>
      <div className="hidden xl:block absolute top-1/4 right-0">
        <img src={right} alt="right" />
      </div>
    </div>
  );
}
