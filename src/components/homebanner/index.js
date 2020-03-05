import React from 'react';
import { Section, Container } from '../../theme';
import { TextWrapper, VideoWrapper, FloatingArrow } from './index.styled';

import cover from '../../images/videobg.png';
import videoWebm from '../../videos/spaceshiplabs.webm';
import videoMp4 from '../../videos/spaceshiplabs.mp4';
import arrow from '../../images/flecha.png';

const HomeBannerComponent = () => (
  <Section isFullPage>
    <VideoWrapper autoPlay muted loop preload="none" poster={cover}>
      <source src={videoWebm} type="video/webm" />
      <source src={videoMp4} type="video/mp4" />
    </VideoWrapper>
    <Container>
      <TextWrapper color="white" textAlign="center">
        <h1>SpaceshipLabs</h1>
        <p>SOFTWARE QUE SE VE BIEN</p>
      </TextWrapper>
    </Container>
    <FloatingArrow>
      <img alt="Spaceshiplabs | ir a Menciones" src={arrow} />
    </FloatingArrow>
  </Section>
);

export default HomeBannerComponent;
