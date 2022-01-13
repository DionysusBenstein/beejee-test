import { React, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { hideFlash } from '../redux/actions';

function Flash({}) {
  const text = useSelector(state => state.app.flash);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(hideFlash()), 3000);  
  }, [])

  return (
    <FlashBox active={text}>
      {text}
    </FlashBox>
  );
}

const FlashBox = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 999;
  padding: ${({active}) => active ? '20px 60px' : '0'};
  background: var(--secondary-color);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.08),
              0 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 16px 16px;
  transition: all 0.1s ease-out;
  transform: ${({active}) => active ? 'translate(-50%, 0);' : 'translate(-50%, -100%);'};
`;

export default Flash;
