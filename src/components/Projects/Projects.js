import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider></SectionDivider>
    <SectionTitle main>Proyectos</SectionTitle>
    <GridContainer>
      {
        projects.map((project) => (
        <BlogCard key={project.id}>
            <Img src={project.image} />
            <TitleContent>
              <HeaderThree>{project.title}</HeaderThree>
              <Hr/>
            </TitleContent>
            <CardInfo>{project.description}</CardInfo>
            <div>
              <Hr/>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {project.tags.map((tag,i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={project.visit} target="_blank">Codigo</ExternalLinks>
              <ExternalLinks href={project.source} target="_blank">Fuente</ExternalLinks>
            </UtilityList>
        </BlogCard>
      ))
      }
    </GridContainer>
  </Section>
);

export default Projects;