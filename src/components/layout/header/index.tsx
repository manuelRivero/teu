import React, { useState } from 'react';
import { useLocation } from '@reach/router';
import logoTeu from '../../../assets/images/logos/logo-teu-main.svg';
import burgerMenu from '../../../assets/images/icons/burgerMenu.svg';
import CustomLink from '../../shared/CustomLink';
import CustomButton from '../../shared/CustomButton';
import BurgerMenu from './BurgerMenu';

export default function Header() {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleShowMenu = () => setShowMenu((prev: boolean) => !prev);

  return (
    <div>
      <header
        className={`absolute lg:fixed flex justify-center container top-0 left-1/2 -translate-x-1/2 pt-8 z-20`}
      >
        <div className="flex space-x-20 xl:space-x-[200px] items-center border border-customGray-200 bg-white rounded-lg px-8 py-2">
          <img src={logoTeu} alt="Teu" />
          <div className="hidden lg:flex items-center space-x-10">
            <CustomLink
              href="/cliente/"
              text="Cliente"
              isActive={pathname === '/cliente/' || pathname === '/'}
            />
            <CustomLink
              href="/gestor/"
              text="Gestor"
              isActive={pathname === '/gestor/'}
            />
            <CustomButton
              text={
                pathname === '/cliente/'
                  ? 'Solicitar'
                  : 'Convertirme en promoTeur'
              }
              textColor="customPurple-600"
              bgColor="customYellow-500"
              cb={() => {}}
              textSize={pathname === '/cliente/' ? undefined : 'smallest'}
            />
          </div>
          <div
            className="flex lg:hidden justify-center items-center bg-customBlue-500 w-[50px] h-[50px] rounded-lg cursor-p"
            onClick={() => handleShowMenu()}
          >
            <img src={burgerMenu} alt="burgerMenu" />
          </div>
        </div>
      </header>
      {showMenu && <BurgerMenu onClose={() => handleShowMenu()} />}
    </div>
  );
}
