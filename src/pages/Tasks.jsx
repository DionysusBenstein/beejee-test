import React from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import Modal from '../components/Modal';
import Flash from '../components/Flash';

function Tasks() {
  return (
    <div>
      <Modal>
        <TaskForm />
      </Modal>
      <Flash/>
      <TaskList title="Список задач"/>
    </div>
  ); 
}

export default Tasks;
