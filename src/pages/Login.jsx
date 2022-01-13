import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import TextInput from '../components/UI/TextInput';
import Label from '../components/UI/Label';
import Button from '../components/UI/Button';
import { useForm } from 'react-hook-form';

function Login() {

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  function onSubmit() {
    alert(1);
  }

  return (
    <Wrapper>
      <Title>Login</Title>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Label text="Username" errorText={errors?.username?.message}>
          <TextInput register={register} name='username'/>
        </Label>
        <Label text="Password" errorText={errors?.password?.message}>
          <TextInput register={register} name='password'/>
        </Label>
        <Button padding>Войти</Button>
      </StyledForm>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 26px 20px;
`;

export default Login;
