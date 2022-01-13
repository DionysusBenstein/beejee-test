import React from 'react';
import styled from 'styled-components';

function Button({children, ...props}) {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  padding: ${({padding}) => padding ? '14px 16px' : '14px 0'};
  font-size: 18px;
  color: var(--light-color);
  text-decoration: none;
  background: transparent;
  outline: none;
  border: none;
  transition: all 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${({padding}) => padding ? 'var(--secondary-color)' : 'transparent'};
  }
`;

export default Button;
