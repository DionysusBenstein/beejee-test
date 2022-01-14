import { combineReducers } from 'redux';
import { tasksReducer } from './tasksReducer';
import { appReducer } from './appReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  app: appReducer,
  auth: authReducer
});