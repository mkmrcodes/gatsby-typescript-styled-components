import React, { useState } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useClickOutsideListenerRef } from '../hooks/useClickOutsideListenerRef';
import { Navicon } from '@styled-icons/evil/Navicon';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { Container } from './StyledLayout';

export interface NavSmallWrapperProps {
  onClose: () => void;
}
const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.colors.primary.DEFAULT};
`;
const StyledLogo = styled.div`
  width: 220px;
  height: 50px;
  margin-left: 30px;
`;
const StyledLink = styled(GatsbyLink)`
  flex: 1 1 auto;
  color: ${(props) => props.theme.colors.primary.text};
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  padding: 0.5rem;
  border-radius: 8px;
  &:hover {
    background-color: ${(props) => props.theme.colors.tertiary.DEFAULT};
    box-shadow: ${(props) => props.theme.colors.dark} 0px 3px 8px;
  }
`;
const StyledDiv = styled.div`
  width: 60%;
  height: 100%;
  display: none;

  margin: 0;
  padding-right: 1rem;
  @media ${(props) => props.theme.breakpoints.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    flex-wrap: nowrap;
  }
`;
const NavHamburger = styled(Navicon)`
  display: block;
  color: ${(props) => props.theme.colors.primary.text};
  cursor: pointer;
  padding-right: 10px;
  @media ${(props) => props.theme.breakpoints.tablet} {
    display: none;
  }
`;
const NavClose = styled(CloseOutline)`
  display: block;
  color: ${(props) => props.theme.colors.primary.text};
  cursor: pointer;
  padding-right: 10px;
  @media ${(props) => props.theme.breakpoints.tablet} {
    display: none;
  }
`;
const NavSmall = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary.DEFAULT};
  @media ${(props) => props.theme.breakpoints.tablet} {
    display: none;
  }
`;
const StyleDivSmall = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  flex-wrap: nowrap;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media ${(props) => props.theme.breakpoints.tablet} {
    display: none;
  }
`;
const StyledLinkSmall = styled(GatsbyLink)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.primary.text};
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  padding: 1rem;
  &:hover {
    background-color: ${(props) => props.theme.colors.tertiary.DEFAULT};
  }
`;
const NavSmallWrapper: React.FC<NavSmallWrapperProps> = (props) => {
  const { onClose, children } = props;
  const ref = useClickOutsideListenerRef(onClose);
  return <div ref={ref}>{children}</div>;
};

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container fullwidth>
      <StyledNavBar>
        <StyledLogo>
          <GatsbyLink to={'/'}>
            <StaticImage
              src='../images/logo.png'
              alt='logo'
              placeholder='blurred'
              layout='fixed'
              width={220}
            />
          </GatsbyLink>
        </StyledLogo>
        <StyledDiv>
          <StyledLink to={'/'}>ANASAYFA</StyledLink>
          <StyledLink to={'/hakkimizda'}>HAKKIMIZDA</StyledLink>
          <StyledLink to={'/hizmetlerimiz'}>HİZMETLERİMİZ</StyledLink>
          <StyledLink to={'/galeri'}>GALERİ</StyledLink>
          <StyledLink to={'/iletisim'}>İLETİŞİM</StyledLink>
        </StyledDiv>
        {!open ? (
          <NavHamburger
            size={40}
            title={'Navigation Hamburger Button'}
            onClick={() => {
              setOpen(true);
            }}
          />
        ) : (
          <NavClose
            size={40}
            title={'Navigation Close Button'}
            onClick={() => {
              setOpen(false);
            }}
          />
        )}
      </StyledNavBar>
      {open && (
        <NavSmallWrapper onClose={() => setOpen(false)}>
          <NavSmall>
            <StyleDivSmall
              as={motion.ul}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <StyledLinkSmall to={'/'}>ANASAYFA</StyledLinkSmall>
              <StyledLinkSmall to={'/hakkimizda'}>HAKKIMIZDA</StyledLinkSmall>
              <StyledLinkSmall to={'/hizmetlerimiz'}>
                HİZMETLERİMİZ
              </StyledLinkSmall>
              <StyledLinkSmall to={'/galeri'}>GALERİ</StyledLinkSmall>
              <StyledLinkSmall to={'/iletisim'}>İLETİŞİM</StyledLinkSmall>
            </StyleDivSmall>
          </NavSmall>
        </NavSmallWrapper>
      )}
    </Container>
  );
};

export default NavBar;
