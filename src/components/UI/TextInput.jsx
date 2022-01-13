import React from 'react';
import styled from 'styled-components';

function TextInput({register, name, multiline, ...props}) {
  return (
    <StyledInput 
      {...register(name, {required: "Поле не может быть пустым"})}
      as={multiline ? 'textarea' : ''} 
      {...props}
    />
  );
};

const StyledInput = styled.input`
  margin-bottom: 30px;
  padding: 14px 16px;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  color: var(--light-color);
  background: var(--secondary-color);
  border: none;
  outline: none;
  resize: none;
`;

export default TextInput;
