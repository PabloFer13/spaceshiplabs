import React from 'react';
import Layout from '../layouts/layout';
import SEO from '../components/seo';
import HomeBannerComponent from '../components/homebanner';
import SectionTitleComponent from '../components/sectiontitle';

const ComponentsPage = () => (
  <Layout>
    <SEO title="Components" />
    <HomeBannerComponent />
    <SectionTitleComponent>
      <h2>Menciones</h2>
    </SectionTitleComponent>
  </Layout>
);

export default ComponentsPage;
