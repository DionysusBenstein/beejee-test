import React from 'react';
import styled from 'styled-components';

function Label({children, text, errorText, ...props}) {
  return <StyledLabel errorText={errorText}>{text}{children}</StyledLabel>;
}

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
  color: var(--light-color);

  &::after {
    content: '${({errorText}) => errorText}';
    position: relative;
    top: -35px;
    font-size: 15px;
    font-weight: 300;
    color: #d63031;
  }
`;

export default Label;
