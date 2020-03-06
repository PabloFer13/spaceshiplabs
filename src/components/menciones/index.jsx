import React from 'react';
import { Grid, GrisSquare } from './index.styled';

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
  imco, cnn, telemundo, televisa, eluniversal,
  excelsior, lajornada, animalpolitico, opendata, sipse,
];

const MencionesComponent = () => (
  <Grid flexWrap>
    {menciones.map((mencion) => <GrisSquare image={mencion} />)}
  </Grid>
);

export default MencionesComponent;
