import React from 'react';
import styled from 'styled-components';

import { Clock } from '@styled-icons/bootstrap/Clock';
import { Telephone } from '@styled-icons/bootstrap/Telephone';
import { Location } from '@styled-icons/icomoon/Location';
import { PhoneIphone } from '@styled-icons/material/PhoneIphone';
import { Container } from './StyledLayout';

const StyledTopHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.light};
  font-size: 12px;
  &:hover {
    color: ${(props) => props.theme.colors.head};
  }
  @media ${(props) => props.theme.breakpoints.tablet} {
    flex-direction: row;
    font-size: 14px;
  }
`;
const StyledTopHeaderItem = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.light};
`;
const StyledTopHeaderItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.light};
  padding: 0.25rem 1rem;
  &.linked {
    cursor: pointer;
  }
  &.linked:hover > * {
    color: ${(props) => props.theme.colors.head};
  }
  @media ${(props) => props.theme.breakpoints.tablet} {
    padding: 0.5rem 2rem;
  }
`;
const StyledClock = styled(Clock)`
  display: block;
  color: ${(props) => props.theme.colors.primary.text};
  cursor: pointer;
  padding-right: 10px;
`;
const StyledTelephone = styled(Telephone)`
  display: block;
  color: ${(props) => props.theme.colors.primary.text};
  cursor: pointer;
  padding-right: 10px;
`;
const StyledPhoneIphone = styled(PhoneIphone)`
  display: block;
  color: ${(props) => props.theme.colors.primary.text};
  cursor: pointer;
  padding-right: 10px;
`;
const StyledLocation = styled(Location)`
  display: block;
  color: ${(props) => props.theme.colors.primary.text};
  cursor: pointer;
  padding-right: 10px;
`;

const TopHeader = () => {
  return (
    <Container fullwidth>
      <StyledTopHeader>
        <StyledTopHeaderItemWrapper>
          <StyledClock size={20} title={'Çalışma Saatlerimiz'} />
          <StyledTopHeaderItem>
            Pazartesi - Cumartesi | 08:00 - 19:00
          </StyledTopHeaderItem>
        </StyledTopHeaderItemWrapper>
        <StyledTopHeaderItemWrapper className={'linked'}>
          <StyledTelephone size={20} title={'Telefon Numaramız'} />
          <StyledTopHeaderItem>
            <a href={'tel:03120000000'}>0312 000 00 00</a>
          </StyledTopHeaderItem>
        </StyledTopHeaderItemWrapper>
        <StyledTopHeaderItemWrapper className={'linked'}>
          <StyledPhoneIphone size={20} title={'Telefon Numaramız'} />

          <StyledTopHeaderItem>
            <a href={'tel:05555555555'}>0555 555 55 55</a>
          </StyledTopHeaderItem>
        </StyledTopHeaderItemWrapper>
        <StyledTopHeaderItemWrapper className={'linked'}>
          <StyledLocation size={20} title={'Adresimiz'} />
          <StyledTopHeaderItem>
            xxxxxxxx xxxxxxxxxx xxxxxx xxxxxx / Ankara
          </StyledTopHeaderItem>
        </StyledTopHeaderItemWrapper>
      </StyledTopHeader>
    </Container>
  );
};

export default TopHeader;
