import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import styled from 'styled-components';

const Services = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto;
  padding: 1rem;
  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-template-columns: auto auto;
  }
  @media ${(props) => props.theme.breakpoints.laptop} {
    grid-template-columns: auto auto auto;
  }
  @media ${(props) => props.theme.breakpoints.desktop} {
    grid-template-columns: auto auto auto;
  }
`;
const TagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.dark};
`;
const StyledTitle = styled.h3`
  padding-top: 1.5rem;
  padding-left: 1rem;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.dark};
  &::after {
    width: 55%;
    height: 8px;
    position: absolute;
    left: 3%;
    top: 28%;
    content: '';
    background: url('assets/bg-index-1-3.png') repeat center/contain;
    -webkit-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    transform: rotate(-3deg);
  }
`;

const StyledUl = styled.ul`
  list-style: none;
`;
const StyledLi = styled.li`
  font-size: 1rem;
  font-weight: 700;
  line-height: 2rem;
  text-indent: -1.5rem;
  &:before {
    content: '>';
    padding-right: 10px;
    color: ${(props) => props.theme.colors.dark};
  }
`;
const BackgroundCards = () => {
  const { bgImg } = useStaticQuery(
    graphql`
      query {
        bgImg: file(relativePath: { eq: "bgservice.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 370
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    `
  );

  const serviceBg = getImage(bgImg);

  return (
    <Services>
      <TagWrapper>
        {serviceBg ? (
          <BgImage image={serviceBg}>
            <StyledTitle>AKÜ</StyledTitle>
            <StyledUl>
              <StyledLi>Acil Akü Yol Yardımı</StyledLi>
              <StyledLi>Acil Akü Yol Yardımı</StyledLi>
              <StyledLi>Acil Akü Yol Yardımı</StyledLi>
              <StyledLi>Acil Akü Yol Yardımı</StyledLi>
            </StyledUl>
          </BgImage>
        ) : null}
      </TagWrapper>
      <TagWrapper>
        {serviceBg ? (
          <BgImage image={serviceBg}>
            <StyledTitle>AKÜ</StyledTitle>
            <StyledUl>
              <StyledLi>Acil Akü Yol Yardımı</StyledLi>
              <StyledLi>Acil Akü Yol Yardımı</StyledLi>
              <StyledLi>Acil Akü Yol Yardımı</StyledLi>
              <StyledLi>Acil Akü Yol Yardımı</StyledLi>
            </StyledUl>
          </BgImage>
        ) : null}
      </TagWrapper>
      <TagWrapper>
        {serviceBg ? (
          <BgImage image={serviceBg}>
            <StyledTitle>AKÜ</StyledTitle>
            <StyledUl>
              <StyledLi>Acil Akü Yol Yardımı</StyledLi>
              <StyledLi>Acil Akü Yol Yardımı</StyledLi>
              <StyledLi>Acil Akü Yol Yardımı</StyledLi>
              <StyledLi>Acil Akü Yol Yardımı</StyledLi>
            </StyledUl>
          </BgImage>
        ) : null}
      </TagWrapper>
    </Services>
  );
};

export default BackgroundCards;
