import { React, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { hideModal, showFlash, fetchTasks, tasksIsFetching } from '../redux/actions';
import styled from 'styled-components';

import TextInput from './UI/TextInput';
import Label from './UI/Label';
import Button from './UI/Button';

import taskService from '../api/TaskService';

function TaskForm() {
  const [task, setTask] = useState({username: '', email: '', text:''});
  const { field, direction } = useSelector(state => state.tasks.sort);
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  async function onSubmit() {
    dispatch(tasksIsFetching(true));
    taskService.createTask(task);
    dispatch(fetchTasks(1, field, direction));
    dispatch(hideModal());
    dispatch(showFlash('Задача добавлено успешно'));
    setTask({username: '', email: '', text:''});
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Label text="Username" errorText={errors?.username?.message}>
        <TextInput
          value={task.username}
          onChange={e => setTask({...task, username: e.target.value})}
          name="username"
          register={register}
        />
      </Label>

      <Label text="Email" errorText={errors?.email?.message}>
        <TextInput
          value={task.email}
          onChange={e => setTask({...task, email: e.target.value})}
          name="email"
          type="email"
          register={register}
        />
      </Label>

      <Label text="Text" errorText={errors?.text?.message}>
        <TextInput
          value={task.text} 
          onChange={e => setTask({...task, text: e.target.value})}
          register={register}
          multiline 
          rows="5"
          name="text"
        />
      </Label >
      <Button padding>Сохранить</Button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  & Button {
    align-self: flex-end;
  }
`;

export default TaskForm;
