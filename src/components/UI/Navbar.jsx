import React from 'react';
import styled from 'styled-components';

function Navbar({children}) {
  return <StyledNavbar>{children}</StyledNavbar>;
}

const StyledNavbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
`;

export default Navbar;
