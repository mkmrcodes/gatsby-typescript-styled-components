import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  fullwidth?: boolean;
}

const StyledContainer = styled.div<ContainerProps>`
  display: block;
  max-width: 100%;
  background-color: ${(props) => props.theme.colors.light};
  margin: 0 auto;
  padding: 0;
  @media screen and (max-width: 576px) {
    max-width: 576px;
  }
  @media screen and (max-width: 768px) {
    max-width: 768px;
  }
  @media screen and (max-width: 992px) {
    max-width: 992px;
  }
  @media screen and (max-width: 1200px) {
    max-width: 1200px;
  }
  @media screen and (max-width: 1920px) {
    max-width: 1440px;
  }
  ${(props) =>
    props.fullwidth &&
    css`
      @media screen and (max-width: 1920px) {
        max-width: 100%;
      }
    `}
`;

export const Container = (props: ContainerProps): JSX.Element => {
  const { children } = props;
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

// enum Resp {
//   row = 'row',
//   column = 'col',
// }
interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  row?: boolean;
  col?: boolean;
}

export const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 0.5rem;
  }
  ${(props) =>
    props.col &&
    css`
      flex-direction: column;
    `}
`;

export const Flex = (props: FlexProps): JSX.Element => {
  const { children } = props;
  return <StyledFlex {...props}>{children}</StyledFlex>;
};

export const Divider = styled.div`
  display: block;
  width: 100%;
  border-bottom: 2px solid ${(props) => props.theme.colors.head};
  margin: 0 auto;
  margin-bottom: 0.25rem;
`;
