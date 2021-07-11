import * as React from 'react';
import Layout from '../components/Layout';
import { Button } from '../components/StyledAtoms';
import { Container, Flex } from '../components/StyledLayout';
import HeroSlider from '../components/HeroSlider';
import BackgroundCards from '../components/BackgroundCards';
import { Airbnb } from '@styled-icons/boxicons-logos/Airbnb';
import styled, { css } from 'styled-components';

const StyledAirbnb = styled(Airbnb)`
  display: block;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  padding-right: 5px;
  padding-left: 5px;
`;
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <Container>
          <Flex>
            <div
              style={{ background: 'red', width: '100px', height: '100px' }}
            />
            <div
              style={{ background: 'blue', width: '100px', height: '100px' }}
            />
            <div
              style={{ background: 'green', width: '100px', height: '100px' }}
            />
            <div
              style={{ background: 'black', width: '100px', height: '100px' }}
            />
            <div
              style={{ background: 'yellow', width: '100px', height: '100px' }}
            />
            <div
              style={{ background: 'purple', width: '100px', height: '100px' }}
            />
          </Flex>
          <title>Home Page</title>
          <Button
            primary
            // icon='@styled-icons/boxicons-logos/Airbnb'
            onClick={() => console.log('Fucked')}
          >
            <Airbnb size={20} style={{ marginRight: '5px' }} /> button
          </Button>
          <Button primary outlined onClick={() => console.log('Fucked')}>
            <Airbnb size={20} style={{ marginRight: '5px' }} />
            button
          </Button>
          <Button secondary onClick={() => console.log('Fucked')}>
            <Airbnb size={20} style={{ marginRight: '5px' }} /> button
          </Button>
          <Button secondary outlined onClick={() => console.log('Fucked')}>
            <Airbnb size={20} style={{ marginRight: '5px' }} /> button
          </Button>
          <Button tertiary onClick={() => console.log('Fucked')}>
            button <Airbnb size={20} style={{ marginLeft: '25px' }} />
          </Button>
          <Button tertiary outlined onClick={() => console.log('Fucked')}>
            button
          </Button>
          <HeroSlider />
          <BackgroundCards />
        </Container>
      </main>
    </Layout>
  );
};

export default IndexPage;
