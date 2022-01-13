import React from 'react';
import styled from 'styled-components';
import Checkbox from './UI/Checkbox';
import Button from './UI/Button';

function TaskItem({username, email, text, status}) {
  return (
    <Wrapper>
      <FlexContainer>
        <Checkbox />
        {/* <Button padding>edit</Button> */}
        <StyledHeader> 
          <Username>{username}</Username>
          <Email>{email}</Email>
        </StyledHeader>
      </FlexContainer>
      <Text>{text}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 16px 0;
  padding: 16px 20px;
  transition: all 0.1s ease-in-out;
  overflow-wrap: break-word;
  
  &:hover {
    /* background: var(--secondary-color); */
  }
`;

const StyledHeader = styled.header`
  display: inline-flex;
  flex-direction: column;
  margin-left: 12px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: start;
`;

const Username = styled.span`
  font-weight: 500;
  font-size: 22px;
`;

const Email = styled.span`
  margin-top: 3px;
  font-weight: normal;
  font-size: 14px;
  opacity: 0.7;
  color: var(--light-color);
`;

const Text = styled.p`
  margin: 16px 16px 16px 37px;
  line-height: 25px;
`;  

export default TaskItem;
