import React from 'react';
import GestorHero from '../components/gestor/GestorHero';
import WinUpTo from '../components/gestor/WinUpTo';
import RecurringIncome from '../components/gestor/RecurringIncome';
import AtYourPace from '../components/gestor/AtYourPace';
import ManagerReviews from '../components/gestor/ManagerReviews';

export default function Gestor() {
  return (
    <div className="container flex flex-col space-y-10 pt-36">
      <GestorHero />
      <WinUpTo />
      <RecurringIncome />
      <AtYourPace />
      <ManagerReviews />
    </div>
  );
}
