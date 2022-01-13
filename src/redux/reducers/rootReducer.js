import { combineReducers } from 'redux';
import { tasksReducer } from './tasksReducer';
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  app: appReducer
});