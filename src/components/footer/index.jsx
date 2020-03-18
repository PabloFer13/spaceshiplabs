import React from 'react';
import { Rows, ContainerXL } from '../../theme';
import { Footer, InfoData, SmallLogo } from './index.styled';

const FooterComponent = () => (
  <Footer>
    <ContainerXL>
      <Rows align="space-between" verticalAlign="center">
        <SmallLogo className="icon-nave" />
        <InfoData>
          <p>Avenida Bonampak Calle Cereza #1 SM 2-A L 20 CP 77500</p>
          <p>Cancún Quintana Roo, México.</p>
          <p>
            <a href="tel:+52 (998)2540347">
              <i className="icon-telefono" />
              +52 (998) 254 03 47
            </a>
          </p>
        </InfoData>
      </Rows>
    </ContainerXL>
  </Footer>
);

export default FooterComponent;
