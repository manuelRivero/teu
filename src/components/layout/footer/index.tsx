import React from 'react';
import instaLogo from '../../../assets/images/logos/insta-logo.svg';
import fbLogo from '../../../assets/images/logos/fb-logo.svg';

export default function Footer() {
  return (
    <footer>
      <div className="bg-customPurple-600 w-full px-32">
        <div className="flex space-x-[200px]">
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
      </div>
    </footer>
  );
}
