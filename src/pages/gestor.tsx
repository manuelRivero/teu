import React from 'react';
import GestorHero from '../components/gestor/GestorHero';
import WinUpTo from '../components/gestor/WinUpTo';
import RecurringIncome from '../components/gestor/RecurringIncome';

export default function Gestor() {
  return (
    <div className="container flex flex-col space-y-10 pt-36">
      <GestorHero />
      <WinUpTo />
      <RecurringIncome />
    </div>
  );
}
