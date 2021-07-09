import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bienvenido a Mi Portafolio
        </SectionTitle>
        <SectionText>
          El proposito de este portafolio es mostrar mis habilidades adquiridas.
        </SectionText>
        <Button onClick={() => window.location = 'https://google.com'}>Ver Mas</Button>
      </LeftSection>
  </Section>
);

export default Hero;