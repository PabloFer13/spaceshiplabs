/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import '../theme/layout.css';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

import { Content } from '../theme';

const Layout = ({ children }) => (
  <>
    <HeaderComponent />
    <Content>
      {children}
    </Content>
    <FooterComponent />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
