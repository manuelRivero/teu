import React from 'react';
import logoTeu from '../../../assets/images/logos/logo-teu-main.svg';
import { Link } from 'gatsby';

interface Props {
  onClose: () => void;
}

export default function BurgerMenu({ onClose }: Props) {
  return (
    <div className="fixed top-0 left-0 z-40 h-screen w-screen bg-white py-11 px-4">
      <div className="flex justify-between items-center">
        <img src={logoTeu} alt="logoTeu" className="w-[120px]" />
        <div className="cursor-pointer" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
              fill="#1E1349"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col divide-y-2 px-2">
        <div
          className="flex justify-between items-center py-4 cursor-pointer"
          onClick={onClose}
        >
          <Link
            to="/cliente/"
            className="text-customPurple-600 font-bold text-small"
          >
            Cliente
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </div>
        <div
          className="flex justify-between items-center py-4 cursor-pointer"
          onClick={onClose}
        >
          <Link
            to="/gestor/"
            className="text-customPurple-600 font-bold text-small"
          >
            Gestor
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
