import React from 'react';
import instaLogo from '../../../assets/images/logos/insta-logo.svg';
import fbLogo from '../../../assets/images/logos/fb-logo.svg';
import logoTeu from '../../../assets/images/logos/logo-teu-main.svg';

export default function Footer() {
  return (
    <footer className="container bg-customPurple-600 w-full flex justify-center px-0 teu-footer">
      <div className="grid grid-cols-1 xl:grid-cols-3  px-32 w-fit border-t border-t-white pb-20">
        <div className="flex space-x-[200px] pt-10">
          <div className="flex flex-col space-y-5">
            <div>
              <h3 className="text-white text-little uppercase leading-snug">
                Contacto
              </h3>
              <p className="text-white text-little font-bold leading-snug">
                contacto@teu.mx
              </p>
              <p className="text-white text-little font-bold leading-snug">
                +52 55 4002 2767
              </p>
            </div>
            <div className="flex space-x-3">
              <img src={instaLogo} alt="Instagram" />
              <img src={fbLogo} alt="Facebook" />
            </div>
          </div>
        </div>
        <div className="flex space-x-[200px] pt-10">
          <div className="flex flex-col space-y-5">
            <div>
              <h3 className="text-white text-little uppercase leading-snug">
                Clientes
              </h3>
              <p className="text-white text-little font-bold leading-snug">
                Obtener crédito
              </p>
              <p className="text-white text-little font-bold leading-snug">
                Simulador de crédito
              </p>
              <p className="text-white text-little font-bold leading-snug">
                Preguntas frecuentes
              </p>
            </div>
            <div>
              <h3 className="text-white text-little uppercase leading-snug">
                Gestores
              </h3>
              <p className="text-white text-little font-bold leading-snug">
                Ser gestor
              </p>
              <p className="text-white text-little font-bold leading-snug">
                Simulador de crédito
              </p>
              <p className="text-white text-little font-bold leading-snug">
                Preguntas frecuentes
              </p>
            </div>
          </div>
        </div>
        <div className="flex space-x-[200px] pt-10">
          <div className="flex flex-col space-y-5">
            <div>
              <h3 className="text-white text-little uppercase leading-snug">
                PolÍticas y Terminos
              </h3>
              <p className="text-white text-little font-bold leading-snug">
                Políticas de privacidad
              </p>
              <p className="text-white text-little font-bold leading-snug">
                Terminos y condiciones
              </p>
              <p className="text-white text-little font-bold leading-snug">
                Marco legal
              </p>
              <p className="text-white text-little font-bold leading-snug">
                CAT
              </p>
            </div>
            <div>
              <img src={logoTeu} alt="logoTeu" />
            </div>
            <div>
              <p className="text-white text-little font-bold leading-snug">
                © 2023 TEU TECHNOLOGIES
              </p>
              <p className="text-white text-little font-bold leading-snug">
                Todos los Derechos Reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
