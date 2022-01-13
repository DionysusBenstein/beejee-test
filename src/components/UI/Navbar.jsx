import React from 'react';
import styled from 'styled-components';
import { useRoutes } from 'react-router-dom';

function Navbar({children}) {
  const location = useRoutes();
  console.log(location.pathname);
  return <StyledNavbar>{children}</StyledNavbar>;
}

const StyledNavbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
`;

export default Navbar;
