import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
          <LinkColumn>
              <LinkTitle>Cel</LinkTitle>
              <LinkItem href="tel: 111-111-111">111-111-111</LinkItem>
          </LinkColumn>
          <LinkColumn>
              <LinkTitle>Email</LinkTitle>
              <LinkItem href="mailto:prueba@correo.com">prueba@correo.com</LinkItem>
          </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovando en cada proyecto</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com">
            <AiFillGithub size="30px"></AiFillGithub>
          </SocialIcons>
          <SocialIcons href="https://linkedin.com">
            <AiFillLinkedin size="30px"></AiFillLinkedin>
          </SocialIcons>
          <SocialIcons href="https://instagram.com">
            <AiFillInstagram size="30px"></AiFillInstagram>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
