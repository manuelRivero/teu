import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';
import Client from './cliente';
import { navigate } from '@reach/router';
import { SEO } from '../components/seo';

// import { SEO } from "../components/seo";

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    navigate('/cliente/');
  }, []);
  return (
    <div>
      <Client />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <SEO
    title="Teu: Créditos individuales y grupales para ti"
    description="Teu es la solución perfecta para quienes buscan créditos rápidos, individuales o grupales, con montos de 5 mil a 60 mil pesos y desembolso en menos de 24 horas. Ofrecemos precios justos y altamente competitivos dentro del mercado, sin comprometer la calidad del servicio. Además, Teu empodera a promotores para generar ingresos adicionales al crecer sus carteras de crédito, con comisiones atractivas por cada crédito aprobado y los intereses cobrados. Con Teu, transformamos vidas financieras con transparencia y accesibilidad en ambos lados de la ecuación. ¡Únete ahora!"
  />
);
