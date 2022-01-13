import React from 'react';
import styled from 'styled-components';

function Title({children, ...props}) {
  return <StyledTitle {...props}>{children}</StyledTitle>;
}

const StyledTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

export default Title;
