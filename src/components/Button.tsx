import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  background-color: ${(props) => props.theme.colors.head};
  color: ${(props) => props.theme.colors.light};
  font-size: 16px;
  margin-top: 0.25rem;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  line-height: 1.25;
  outline: none;
`;

const Button = () => {
  return (
    <div>
      <StyledButton>BUTTON</StyledButton>
    </div>
  );
};

export default Button;
