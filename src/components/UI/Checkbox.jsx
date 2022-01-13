import { React, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckedIcon } from '../../icons/checked.svg';

function Checkbox(props) {
  const [ checked, setChecked ] = useState(false);

  return (
    <StyledCheckbox checked={checked}>
      <input type="checkbox" onChange={e => setChecked(e.target.checked)} {...props} />
      {/* {checked && <CheckedIcon/>} */}
      <CheckedIcon/>
    </StyledCheckbox>
  );
}

const StyledCheckbox = styled.label`
  display: inline-block;
  width: 25px;
  height: 25px;
  border: ${({checked}) => !checked ? '2px' : '0'} solid var(--light-color);
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  transition: all 0.01s ease-out;

  & input { 
    display: none;
  }

  & svg {
    transform: ${({checked}) => checked ? 'scale(1)' : 'scale(0.5)'};
    opacity: ${({checked}) => checked ? '1' : '0'};
    transition: all 0.1s ease-out;
  } 
`;

export default Checkbox;
