import React from 'react';
import SectionTitleComponent from '../sectiontitle';
import { Rows } from '../../theme';
import {
  SectionContact, ContainerContact, SocialIcon, Form,
} from './index.styled';

const ContactSharedComponent = () => (
  <SectionContact isFullPage>
    <ContainerContact>
      <SectionTitleComponent color="white" padding="0">
        <h2>Contáctanos</h2>
      </SectionTitleComponent>
      <p>
        Déjanos saber las necesidades de tu empresa. Estamos seguros que tenemos la mejor solución.
      </p>
      <Form>
        <input type="text" name="name" placeholder="Nombre" />
        <input type="email" name="email" placeholder="Email" />
        <textarea rows="4" placeholder="Mensaje" />
        <button type="submit">
          <span>Enviar</span>
        </button>
      </Form>
      <Rows align="center">
        <SocialIcon href="/" className="icon-tweet" />
        <SocialIcon href="/" className="icon-insta" />
        <SocialIcon href="/" className="icon-face" />
        <SocialIcon href="/" className="icon-youtube" />
      </Rows>
    </ContainerContact>
  </SectionContact>
);

export default ContactSharedComponent;
