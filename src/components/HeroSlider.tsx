import React, { ReactNode } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Slider from 'react-slick';

import '../styles/slick.css';
import '../styles/slick-theme.css';
import { ArrowBackIos } from '@styled-icons/material/ArrowBackIos';
import { ArrowForwardIos } from '@styled-icons/material/ArrowForwardIos';
import { Container } from './StyledLayout';

const PrevArrow = styled(ArrowBackIos)`
  display: none;
  color: ${(props) => props.theme.colors.dark};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.light};
  }
  @media ${(props) => props.theme.breakpoints.tablet} {
    display: block;
  }
`;
const NextArrow = styled(ArrowForwardIos)`
  display: none;
  color: ${(props) => props.theme.colors.dark};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.light};
  }
  @media ${(props) => props.theme.breakpoints.tablet} {
    display: block;
  }
`;
function CustomNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
      onKeyPress={onClick}
      role='button'
      tabIndex={0}
    >
      <NextArrow size={40} title={'Next slide button'} />
    </div>
  );
}

function CustomPrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
      onKeyPress={onClick}
      role='button'
      tabIndex={0}
    >
      <PrevArrow size={40} title={'Previous slide button'} />
    </div>
  );
}

const HeroSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
          absolutePath: { regex: "/images/hero/" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                width: 1920
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
            name
          }
        }
      }
    }
  `);
  let heros: ReactNode[] = [];

  data.allFile.edges.map((edge: any) => {
    const img = getImage(edge.node);
    heros.push(
      <div key={edge.node.name} id={edge.node.name}>
        <div>
          <div>
            {img ? <GatsbyImage image={img} alt={edge.node.name} /> : null}
          </div>
        </div>
      </div>
    );
    return null;
  });

  var settings = {
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    className: 'slides',
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const StyledSlider = styled(Slider)`
    .slick-list {
      margin: 0 !important;
    }
  `;
  return (
    <Container fullwidth>
      <StyledSlider {...settings}>{heros}</StyledSlider>
    </Container>
  );
};

export default HeroSlider;
