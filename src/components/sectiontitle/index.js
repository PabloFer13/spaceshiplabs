import React from 'react';
import PropTypes from 'prop-types';
import { SectionTitleWrapper } from './index.styled';

const SectionTitleComponent = ({ children }) => (
  <SectionTitleWrapper>
    {children}
  </SectionTitleWrapper>
);

SectionTitleComponent.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SectionTitleComponent;
