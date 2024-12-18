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

export const Head: HeadFC = () => <SEO title="Teu | Cliente" description="" />;
