import React from 'react';
import GestorHero from '../components/gestor/GestorHero';
import WinUpTo from '../components/gestor/WinUpTo';
import RecurringIncome from '../components/gestor/RecurringIncome';
import AtYourPace from '../components/gestor/AtYourPace';
import ManagerReviews from '../components/gestor/ManagerReviews';
import { HeadFC } from 'gatsby';
import { SEO } from '../components/seo';

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

export const Head: HeadFC = () => (
  <SEO
    title="Teu: Créditos individuales y grupales para ti"
    description="Teu es la solución perfecta para quienes buscan créditos rápidos, individuales o grupales, con montos de 5 mil a 60 mil pesos y desembolso en menos de 24 horas. Ofrecemos precios justos y altamente competitivos dentro del mercado, sin comprometer la calidad del servicio. Además, Teu empodera a promotores para generar ingresos adicionales al crecer sus carteras de crédito, con comisiones atractivas por cada crédito aprobado y los intereses cobrados. Con Teu, transformamos vidas financieras con transparencia y accesibilidad en ambos lados de la ecuación. ¡Únete ahora!"
  />
);
