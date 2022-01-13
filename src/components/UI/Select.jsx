import React from 'react';
import styled from 'styled-components';
import ExpandIcon from '../../icons/expand.svg';

function Select({options, ...props}) {

  return (
    <div>
      <StyledSelect {...props}>
        {options.map(option => 
          <option key={option.value} value={option.value}>{option.name}</option>
        )}
      </StyledSelect>
    </div>
  );
}

const StyledSelect = styled.select`
  padding: 14px 40px 14px 16px;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: var(--light-color);
  background: url(${ExpandIcon}) no-repeat 95%;
  background-color: var(--secondary-color);
  outline: none;
  border: none;
  appearance: none;
`;

export default Select;
