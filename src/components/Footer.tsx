import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import { Flex, Divider } from '../components/StyledLayout';
import { Clock } from '@styled-icons/bootstrap/Clock';
import { Telephone } from '@styled-icons/bootstrap/Telephone';
import { Location } from '@styled-icons/icomoon/Location';
import { PhoneIphone } from '@styled-icons/material/PhoneIphone';
import { Button } from './StyledAtoms';
import { Container } from './StyledLayout';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.darklight};
  background-image: url('assets/bg.png');
  background-repeat: repeat;
`;
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.tablet} {
    flex-direction: row;
  }
`;
const StyledFooterLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 6rem;
`;
const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
`;
const ContentTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.head};
`;

const ContentText = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.light};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.head};
  }
`;

const Footer = () => {
  return (
    <Container fullwidth>
      <FooterContainer>
        <StyledFooterLogo>
          <GatsbyLink to={'/'}>
            <StaticImage
              src='../images/footerlogo.png'
              alt='logo'
              placeholder='blurred'
              layout='fixed'
              width={300}
            />
          </GatsbyLink>
        </StyledFooterLogo>
        <FooterWrapper>
          <ContentWrapper>
            <Flex col>
              <ContentTitle>Telefonlarımız</ContentTitle>
              <Divider />
            </Flex>
            <Flex col>
              <ContentText>
                <a href={'tel:03120000000'}>0312 000 00 00</a>
              </ContentText>

              <ContentText>
                <a href={'tel:0555 555 55 55 '}>0555 555 55 55</a>
              </ContentText>
            </Flex>
          </ContentWrapper>
          <ContentWrapper>
            <Flex col>
              <ContentTitle>Çalışma Saatlerimiz</ContentTitle>
              <Divider />
            </Flex>

            <Flex col>
              <ContentText>Pazartesi - Cumartesi</ContentText>
              <ContentText>08:00 - 19:00</ContentText>
            </Flex>
          </ContentWrapper>
          <ContentWrapper>
            <Flex col>
              <ContentTitle>Telefonlarımız</ContentTitle>
              <Divider />
            </Flex>
            <Flex col>
              <ContentText>
                <a href={'tel:03120000000'}>0312 000 00 00</a>
              </ContentText>

              <ContentText>
                <a href={'tel:0555 555 55 55'}>0555 555 55 55</a>
              </ContentText>
            </Flex>
          </ContentWrapper>
        </FooterWrapper>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
