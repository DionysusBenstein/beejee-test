import { LOGIN, LOGOUT, LOGIN_IS_FETCHING } from '../types';

const initialState = {
  isAuth: localStorage.getItem('token') ? true : false,
  isFetching: false,
  status: ''
}

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuth: action.payload.isAuth,
        status: action.payload.status,
        isFetching: false
      };
    case LOGOUT:      
      return {
        ...state,
        isAuth: false,
        status: action.payload
      };
    case LOGIN_IS_FETCHING:
        return {
          ...state,
          isFetching: action.payload,
        }
    default:
      return state;
  }
}