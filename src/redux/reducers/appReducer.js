import { SHOW_FLASH, HIDE_FLASH, SHOW_MODAL, HIDE_MODAL } from "../types";

const initialState = { 
  flash: null,
  modal: null
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_FLASH:
      return {...state, flash: action.payload};
    case HIDE_FLASH:
      return {...state, flash: null};
    case SHOW_MODAL:
      return {...state, modal: action.payload}
    case HIDE_MODAL:
      return {...state, modal: null};
    default:
      return state;
  }
}
