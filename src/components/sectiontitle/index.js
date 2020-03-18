import React from 'react';
import PropTypes from 'prop-types';
import { SectionTitleWrapper } from './index.styled';

const SectionTitleComponent = ({ children, color, padding }) => (
  <SectionTitleWrapper color={color} padding={padding}>
    {children}
  </SectionTitleWrapper>
);

SectionTitleComponent.defaultProps = {
  color: 'gray',
  padding: '35',
};

SectionTitleComponent.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  padding: PropTypes.string,
};

export default SectionTitleComponent;
