import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '../redux/actions';
import Title from './Title';
import Button from './UI/Button';
import {ReactComponent as CloseIcon} from '../icons/close.svg'

function Modal({children}) {
  const title = useSelector(state => state.app.modal);
  const dispatch = useDispatch();

  return (
    <Wrapper active={title} onClick={() => dispatch(hideModal())}>
      <Content onClick={e => e.stopPropagation()}>
        <Header>
          <Title>{title}</Title>
          <CloseButton onClick={() => dispatch(hideModal())}><CloseIcon/></CloseButton>        
        </Header>
        {children}
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0, 0.6);
  opacity: ${({active}) => active ? '1' : '0'};
  pointer-events: ${({active}) => active ? 'all' : 'none'};
  transition: all 0.2s ease-in-out;

  & div {
    transform: ${({active}) => active ? 'scale(1)' : 'scale(0.9)'};
  }
`;

const Header = styled.header`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Content = styled.div`
  width: 600px;
  min-height: 580px;
  padding: 26px 20px;
  background: var(--bg-color);
  transition: all 0.2s ease-in-out;
`;

const CloseButton = styled(Button)`
  padding: 0;
`;

export default Modal;
