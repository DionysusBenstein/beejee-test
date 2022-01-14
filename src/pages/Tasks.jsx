import React from 'react';
import { useSelector } from 'react-redux';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import Modal from '../components/Modal';
import Loader from '../components/UI/Loader';

function Tasks() {
  const { isFetching } = useSelector(state => state.tasks);

  return (
    <div>
      <Modal>
        <TaskForm />
      </Modal>      
      <TaskList title="Список задач"/>
    </div>
  ); 
}

export default Tasks;
