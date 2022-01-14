import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Checkbox from './UI/Checkbox';
import Button from './UI/Button';
import TextInput from './UI/TextInput';
import Label from './UI/Label';
import taskService from '../api/TaskService';
import { calculateStatus } from '../utils';

function TaskItem({id, username, email, text, status}) {
  const [inputText, setInputText] = useState(text);
  const [newStatus, setNewStatus] = useState(status);
  const [checked, setChecked] = useState(status === 10 || status === 11);
  const [isInEditMode, setIsInEditMode] = useState(false);
  const isAuth = useSelector(state => state.auth.isAuth);

  useEffect(() => {
    taskService.editTask(inputText, newStatus, id);
  }, [newStatus, inputText])

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  function saveChanges() {
    const isTextChanged = text !== inputText || status === 1 || status === 11;
    setNewStatus(calculateStatus(checked, isTextChanged));  
    setIsInEditMode(false);
  }

  return (
    <Wrapper>
      <FlexContainer>
        <Checkbox 
          disabled={!isAuth || !isInEditMode}
          checked={checked}
          setChecked={setChecked}
        />
        <StyledHeader> 
          <Username>{username}</Username>
          <Email>{email}</Email>
        </StyledHeader>
      </FlexContainer>

      { isInEditMode && isAuth ?
      <form onSubmit={handleSubmit(saveChanges)}>
        <Label errorText={errors?.a?.message}>
          <Text 
            as={TextInput}
            multiline
            rows={3}
            register={register} 
            value={inputText} 
            name={id.toString()} 
            onChange={e => setInputText(e.target.value)}
          />
        </Label>
        <StyledButton>Сохранить</StyledButton>
        <StyledButton onClick={() => {
          setChecked(!checked);
          setIsInEditMode(false)}
        }>
          Отменить
        </StyledButton>
      </form> 
      :
      <Text onDoubleClick={() => setIsInEditMode(true)}>
        {inputText} 
      </Text>}
      {(newStatus === 1 || newStatus === 11) && <small>(отредактировано администратором)</small> }
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 16px 0;
  padding: 16px 20px;
  transition: all 0.1s ease-in-out;
  overflow-wrap: break-word;  
  
  &:hover {
    background: var(--secondary-color);
  }
`;

const StyledHeader = styled.header`
  display: inline-flex;
  flex-direction: column;
  margin-left: 12px;
`;

const FlexContainer = styled.div`
  display: flex;
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

const StyledButton = styled(Button)`
  display: inline-block;

  & + & {
    margin-left: 16px;
  }
`;

export default TaskItem;
