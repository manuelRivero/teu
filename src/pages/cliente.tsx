import React from 'react';
import ClientHero from '../components/client/ClientHero';
import SimulateYourCredit from '../components/client/SimulateYourCredit';
import FlexiblePlans from '../components/client/FlexiblePlans';
import CustomerReviews from '../components/client/CustomerReviews';
import PaymentOptions from '../components/client/PaymentOptions';
import { HeadFC } from 'gatsby';
import { SEO } from '../components/seo';

export default function Client() {
  return (
    <div className="container flex flex-col space-y-10 pt-36">
      <ClientHero />
      <SimulateYourCredit />
      <FlexiblePlans />
      <CustomerReviews />
      <PaymentOptions />
    </div>
  );
}

export const Head: HeadFC = () => (
  <SEO
    title="Teu: Créditos individuales y grupales para ti"
    description="Teu es la solución perfecta para quienes buscan créditos rápidos, individuales o grupales, con montos de 5 mil a 60 mil pesos y desembolso en menos de 24 horas. Ofrecemos precios justos y altamente competitivos dentro del mercado, sin comprometer la calidad del servicio. Además, Teu empodera a promotores para generar ingresos adicionales al crecer sus carteras de crédito, con comisiones atractivas por cada crédito aprobado y los intereses cobrados. Con Teu, transformamos vidas financieras con transparencia y accesibilidad en ambos lados de la ecuación. ¡Únete ahora!"
  />
);
