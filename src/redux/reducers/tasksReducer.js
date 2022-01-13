import { FETCH_TASKS, SET_CURRENT_PAGE, SET_SORT, TASKS_IS_FETCHING } from '../types';

const initialState = {
  list: [],
  currentPage: 1,
  totalCount: 0,
  isFetching: true,
  sort: {
    field: 'id',
    direction: 'desc'
  }
};

export function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...state,
        list: [...action.payload.tasks],
        totalCount: action.payload.totalCount,
        isFetching: false
      };
    case TASKS_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    case SET_SORT:
      return {
        ...state,
        sort: {
          field: action.payload.field || state.sort.field,
          direction: action.payload.direction || state.sort.direction
        }
      }
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.payload}
    default:
      return state;
  }
}