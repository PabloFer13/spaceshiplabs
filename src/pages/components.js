import React from 'react';
import Layout from '../layouts/layout';
import SEO from '../components/seo';

import { Section, Container } from '../theme';

import HomeBannerComponent from '../components/homebanner';
import MencionesComponent from '../components/menciones';
import SectionTitleComponent from '../components/sectiontitle';

const ComponentsPage = () => (
  <Layout>
    <SEO title="Components" />
    {/* Home banner component start */}
    <HomeBannerComponent />
    {/* Home banner component start */}
    {/* Menciones component start */}
    <Section isFullPage color="gray">
      <Container>
        <SectionTitleComponent>
          <h2>Menciones</h2>
        </SectionTitleComponent>
        <MencionesComponent />
      </Container>
    </Section>
    {/* Menciones component end */}
  </Layout>
);

export default ComponentsPage;
