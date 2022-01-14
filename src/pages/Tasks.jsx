import React from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import Modal from '../components/Modal';

function Tasks() {
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
