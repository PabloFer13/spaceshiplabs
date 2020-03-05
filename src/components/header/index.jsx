import React, { useState, useEffect } from 'react';
import {
  Container,
  Rows,
} from '../../theme';
import {
  Header, Logo, Menu, SubMenu, Hamburguer, MenuItem,
} from './index.styled';
import logo from '../../images/logo.png';
import logoSpacees from '../../images/spacees-menu.png';

const HeaderComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const onScroll = (event) => {
    const newScrolled = (event.target.documentElement.scrollTop > 50);
    setScrolled(newScrolled);
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <Header isScrolled={scrolled}>
      <Container>
        <Rows align="space-between" verticalAlign={scrolled ? 'center' : 'flex-end'}>
          <Hamburguer>
            <hr />
            <hr />
            <hr />
          </Hamburguer>
          <Logo href="/">
            {scrolled ? <i className="icon-nave" /> : <img alt="Spaceshiplabs" src={logo} /> }
          </Logo>
          <Menu>
            <li>
              <MenuItem href="/">Acerca de</MenuItem>
              <SubMenu>
                <li><MenuItem href="/">Nosotros</MenuItem></li>
                <li><MenuItem href="/">Equipo espacial</MenuItem></li>
              </SubMenu>
            </li>
            <li><MenuItem href="/">Proyectos</MenuItem></li>
            <li>
              <MenuItem href="/">Servicios</MenuItem>
              <SubMenu>
                <li><MenuItem href="/">UI/UX & Design</MenuItem></li>
                <li><MenuItem href="/">Marketing</MenuItem></li>
                <li><MenuItem href="/">Software</MenuItem></li>
              </SubMenu>
            </li>
            <li><MenuItem href="/">Prensa</MenuItem></li>
            <li><MenuItem href="/">Blog</MenuItem></li>
            <li><MenuItem href="/"><img alt="SpaceEs" src={logoSpacees} /></MenuItem></li>
            <li><MenuItem withBorder href="/"><span>Contacto</span></MenuItem></li>
          </Menu>
        </Rows>
      </Container>
    </Header>
  );
};

export default HeaderComponent;
