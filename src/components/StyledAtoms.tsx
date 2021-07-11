import React from 'react';
import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  outlined?: boolean;
}
const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  background-color: ${(props) => props.theme.colors.head};
  box-shadow: ${(props) => props.theme.shadow};
  color: ${(props) => props.theme.colors.light};
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: 700;
  letter-spacing: 1px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: 2rem;
  padding: 0.6rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  line-height: 1.15;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  outline: none;
  ${(props) =>
    props.primary &&
    css`
      background-color: ${(props) => props.theme.colors.primary.DEFAULT};
      &:hover {
        background-color: ${(props) => props.theme.colors.primary.hover};
      }
      &:focus {
        text-decoration: underline;
      }
      &:active {
        background-color: ${(props) => props.theme.colors.primary.active};
      }
    `}
  ${(props) =>
    props.secondary &&
    css`
      background-color: ${(props) => props.theme.colors.secondary.DEFAULT};
      &:hover {
        background-color: ${(props) => props.theme.colors.secondary.hover};
      }
      &:focus {
        text-decoration: underline;
      }
      &:active {
        background-color: ${(props) => props.theme.colors.secondary.active};
      }
    `}
  ${(props) =>
    props.tertiary &&
    css`
      background-color: ${(props) => props.theme.colors.tertiary.DEFAULT};
      &:hover {
        background-color: ${(props) => props.theme.colors.tertiary.hover};
      }
      &:focus {
        text-decoration: underline;
      }
      &:active {
        background-color: ${(props) => props.theme.colors.tertiary.active};
      }
    `}
  ${(props) =>
    props.outlined &&
    props.primary &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors.primary.DEFAULT};
      border: 2px solid ${(props) => props.theme.colors.primary.DEFAULT};
      &:hover {
        background-color: ${(props) => props.theme.colors.primary.DEFAULT};
        color: ${(props) => props.theme.colors.light};
      }
      &:focus {
        text-decoration: underline;
      }
      &:active {
        background-color: ${(props) => props.theme.colors.primary.active};
      }
    `}
  ${(props) =>
    props.outlined &&
    props.secondary &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors.secondary.DEFAULT};
      border: 2px solid ${(props) => props.theme.colors.secondary.DEFAULT};
      &:hover {
        background-color: ${(props) => props.theme.colors.secondary.DEFAULT};
        color: ${(props) => props.theme.colors.light};
      }
      &:focus {
        text-decoration: underline;
      }
      &:active {
        background-color: ${(props) => props.theme.colors.secondary.active};
      }
    `}
  ${(props) =>
    props.outlined &&
    props.tertiary &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors.tertiary.DEFAULT};
      border: 2px solid ${(props) => props.theme.colors.tertiary.DEFAULT};
      &:hover {
        background-color: ${(props) => props.theme.colors.tertiary.DEFAULT};
        color: ${(props) => props.theme.colors.light};
      }
      &:focus {
        text-decoration: underline;
      }
      &:active {
        background-color: ${(props) => props.theme.colors.tertiary.active};
      }
    `}
`;

export const Button = (props: ButtonProps): JSX.Element => {
  const { children } = props;

  return <StyledButton {...props}>{children}</StyledButton>;
};
