import { React, useEffect } from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, showModal, setSort } from '../redux/actions';

import TaskItem from './TaskItem';
import Title from './Title';
import Button from './UI/Button';
import Pagination from './UI/Pagination';
import Select from './UI/Select';
import { ReactComponent as AddIcon } from '../icons/add_circle_outline.svg';

function TaskList({title}) {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.list);
  const isFetching = useSelector(state => state.tasks.isFetching);
  const currentPage = useSelector(state => state.tasks.currentPage);
  const sort = useSelector(state => state.tasks.sort);
  const isAuth = useSelector(state => state.auth.isAuth);

  useEffect(() => dispatch(fetchTasks(currentPage, sort.field, sort.direction)), [currentPage, isFetching]);

  return (
    <Wrapper>
      <StyledHeader>
        <Title>{title}</Title>
        <Select
          onChange={e => {
            dispatch(setSort(sort.field, e.target.value));
            dispatch(fetchTasks(currentPage, sort.field, e.target.value));
          }}
          defaultValue={sort.direction}
          options={[
            {value: 'asc', name: 'По возрастанию'},
            {value: 'desc', name: 'По убыванию'},
          ]}
        />  
        <Select
          onChange={e => {
            dispatch(setSort(e.target.value, sort.direction));
            dispatch(fetchTasks(currentPage, e.target.value, sort.direction))
          }}
          defaultValue="id"
          options={[
            {value: 'id', name: 'По id'},
            {value: 'username', name: 'По имени'},
            {value: 'email', name: 'По email'},
            {value: 'status', name: 'По статусу'},
          ]}
        />
        <Button onClick={() => dispatch(showModal('Добавить новую задачу'))}>
          <AddIcon/>Создать
        </Button>
      </StyledHeader>
      {isAuth && <small>Для редактирования задачи кликните по тексту дважды</small>}
      {tasks.map(task => {
        return <TaskItem 
          key={task.id}
          id={task.id}
          username={task.username} 
          email={task.email} 
          text={task.text} 
          status={task.status} />
      })}
      <Pagination />      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 20px;
  
  & h1 {
    flex: 1 0 auto;
  }
`;

export default TaskList;
