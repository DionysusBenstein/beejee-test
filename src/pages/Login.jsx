import { React, useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { login, showFlash, loginIsFetching } from '../redux/actions';
import styled from 'styled-components';
import Title from '../components/Title';
import Flash from '../components/Flash';
import TextInput from '../components/UI/TextInput';
import Label from '../components/UI/Label';
import Button from '../components/UI/Button';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isAuth, status, isFetching } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isAuth && !isFetching) {
      navigate('/');
    } else {
      dispatch(showFlash(status));
    }
  }, [isFetching])

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  function onSubmit() {
    dispatch(loginIsFetching(true));
    dispatch(login(username, password));
  }

  return (
    <Wrapper>
        <Flash />
      <Title>Login</Title>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Label text="Username" errorText={errors?.username?.message}>
          <TextInput 
            register={register} 
            name='username' 
            value={username} 
            onChange={e => setUsername(e.target.value)}
          />
        </Label>
        <Label text="Password" errorText={errors?.password?.message}>
          <TextInput 
            register={register} 
            name='password' 
            value={password} 
            onChange={e => setPassword(e.target.value)}
          />
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
