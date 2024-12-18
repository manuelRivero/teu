import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';
import Client from './cliente';
import { navigate } from '@reach/router';

// import { SEO } from "../components/seo";

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    navigate('/cliente/', { replace: true });
  }, []);
  return (
    <div>
      <Client />
    </div>
  );
};

export default IndexPage;

// export const Head: HeadFC = () => (
//   <SEO
//     title="Zapian | Digital Marketing Agency - Proven Growth Strategies"
//     description="Achieve measurable brand growth with our digital marketing solutions, from web design to content and branding. Tailored strategies boost online visibility, customer engagement, and conversions."
//   />
// );
