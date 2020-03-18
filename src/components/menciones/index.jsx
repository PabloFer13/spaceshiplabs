import React from 'react';
import { Grid, GridSquare, GridSquareNoLink } from './index.styled';

import imco from '../../images/imco.png';
import cnn from '../../images/cnn.png';
import telemundo from '../../images/telemundo.png';
import televisa from '../../images/televisa.png';
import eluniversal from '../../images/eluniversal.png';
import excelsior from '../../images/excelsior.png';
import lajornada from '../../images/lajornada.png';
import animalpolitico from '../../images/animalpolitico.png';
import opendata from '../../images/opendata.png';
import sipse from '../../images/sipse.png';

const menciones = [
  { img: imco, url: 'https://imco.org.mx/capital_humano/conferencia-de-prensa-mejora-tu-escuela/' },
  { img: cnn, url: 'https://www.youtube.com/watch?v=lJWqpp09oDY&feature=youtu.be' },
  { img: telemundo, url: false },
  { img: televisa, url: 'https://noticieros.televisa.com/foro-tv-fractal/1409/imco-mejora-tu-escuela/' },
  { img: eluniversal, url: 'https://www.eluniversal.com.mx/blogs/colectivo-mexico-informate/2015/07/8/el-gobierno-como-plataforma' },
  { img: excelsior, url: false },
  { img: lajornada, url: false },
  { img: animalpolitico, url: 'https://www.animalpolitico.com/click-necesario/pide-tus-legisladores-cambiar-la-leytelecom/' },
  { img: opendata, url: 'https://www.opendata500.com/mx/list/' },
  { img: sipse, url: 'https://sipse.com/novedades/lanzan-aplicacion-de-mapa-interactivo-de-gasolineras-en-el-pais-98763.html' },
];

const MencionesComponent = () => (
  <Grid flexWrap>
    {menciones.map((mencion) => (
      mencion.url
        ? <GridSquare href={mencion.url} target="_blank" image={mencion.img} />
        : <GridSquareNoLink image={mencion.img} />
    ))}
  </Grid>
);

export default MencionesComponent;
