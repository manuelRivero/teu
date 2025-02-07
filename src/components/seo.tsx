import React from 'react';
import OgImage from '../images/OgImage.jpg';

interface Props {
  title: string;
  description: string;
}

export const SEO = ({ title, description }: Props) => {
  const seo = {
    title: title,
    description: description,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content="Teu" />
      <meta
        property="og:description"
        content="Solicita hasta 60 mil pesos o gana comisiones siendo promotor. ¡Rápido, flexible y con precios competitivos!"
      />
      <meta
        property="og:image"
        content={`https://teu-ws6i.onrender.com` + OgImage}
      />
      <meta name="og:type" content="website" />
    </>
  );
};
