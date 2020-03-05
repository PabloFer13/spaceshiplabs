import React from 'react';
import Layout from '../layouts/layout';
import SEO from '../components/seo';
import HomeBannerComponent from '../components/homebanner';

const ComponentsPage = () => (
  <Layout>
    <SEO title="Components" />
    <HomeBannerComponent />
  </Layout>
);

export default ComponentsPage;
