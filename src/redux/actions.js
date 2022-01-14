import taskService from '../api/TaskService';
import authService from '../api/AuthService';
import { FETCH_TASKS, TASKS_IS_FETCHING, LOGIN, LOGOUT, LOGIN_IS_FETCHING, SET_SORT, SHOW_FLASH, HIDE_FLASH, SHOW_MODAL, HIDE_MODAL, SET_CURRENT_PAGE } from "./types"

export function login(username, password) {
  return async dispatch => {
    const response = await authService.login(username, password);
    const payload = {};

    if (response.message?.token) {
      localStorage.setItem('token', response.message?.token);
      payload.status = 'Авторизация прошла успешно';
      payload.isAuth = true;
    } else {
      payload.status = response.message.password;
      payload.isAuth = false;
    }
    
    dispatch({
      type: LOGIN,
      payload
    })
  }
}

export function logout() {
  localStorage.removeItem('token');

  return {
    type: LOGOUT
  }
}

export function fetchTasks(currentPage, sortField, sortDirectioin) {
  return async dispatch => {
    const { tasks, totalCount } = await taskService.getByPage(currentPage, sortField, sortDirectioin);
    
    dispatch({
      type: FETCH_TASKS,
      payload: {
        tasks, totalCount
      }
    });
  };
}

export function setCurrentPage(page) {
  return {
    type: SET_CURRENT_PAGE, 
    payload: page
  }
}

export function tasksIsFetching(bool) {
  return {
    type: TASKS_IS_FETCHING,
    payload: bool
  }
}

export function loginIsFetching(bool) {
  return {
    type: LOGIN_IS_FETCHING,
    payload: bool
  }
}

export function setSort(field, direction) {
  return {
    type: SET_SORT,
    payload: {
      field,    
      direction
    }
  }
}

export function showFlash(text) {
  return async dispatch => {
    dispatch({
      type: SHOW_FLASH,
      payload: text
    });

    setTimeout(() => dispatch(hideFlash()), 3000);
  }
}

export function hideFlash() {
  return {
    type: HIDE_FLASH
  }
}

export function showModal(title) {
  return {
    type: SHOW_MODAL,
    payload: title
  }
}

export function hideModal() {
  return {
    type: HIDE_MODAL
  } 
}
