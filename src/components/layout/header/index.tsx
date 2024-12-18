import React from 'react';
import { useLocation } from '@reach/router';
import logoTeu from '../../../assets/images/logos/logo-teu-main.svg';
import burgerMenu from '../../../assets/images/icons/burgerMenu.svg';
import CustomLink from '../../shared/CustomLink';
import CustomButton from '../../shared/CustomButton';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header
      className={`absolute lg:fixed flex justify-center container top-0 left-1/2 -translate-x-1/2 pt-8 z-20`}
    >
      <div className="flex space-x-20 xl:space-x-[200px] items-center border border-customGray-200 bg-white rounded-lg px-8 py-2">
        <img src={logoTeu} alt="" />
        <div className="hidden lg:flex items-center space-x-10">
          <CustomLink
            href="/cliente/"
            text="Cliente"
            isActive={pathname === '/cliente/'}
          />
          <CustomLink
            href="/gestor/"
            text="Gestor"
            isActive={pathname === '/gestor/'}
          />
          <CustomButton
            text="Solicitar"
            textColor="customPurple-600"
            bgColor="customYellow-500"
            cb={() => {}}
          />
        </div>
        <div className="flex lg:hidden justify-center items-center bg-customBlue-500 w-[50px] h-[50px] rounded-lg">
          <img src={burgerMenu} alt="burgerMenu" />
        </div>
      </div>
    </header>
  );
}
