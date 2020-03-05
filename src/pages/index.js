import React from 'react';
import Layout from '../layouts/layout';
import SEO from '../components/seo';
import HomeBannerComponent from '../components/homebanner';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeBannerComponent />
  </Layout>
);

export default IndexPage;
