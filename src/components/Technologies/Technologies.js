import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider></SectionDivider>
    <SectionTitle main>Tecnologias</SectionTitle>
    <SectionText>
      Amplio conocimientos en tecnologias como React, Angular, Laravel, NodeJS
    </SectionText>
    <SectionText>
      <List>
        <ListItem>
          <DiReact size="30px"></DiReact>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experiencia con <br/>
              React, Angular, AngularJS
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="30px"></DiFirebase>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experiencia con <br/>
              MySQL, SQL-Server, NodeJS, .Net, Laravel
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </SectionText>
  </Section>
);

export default Technologies;
