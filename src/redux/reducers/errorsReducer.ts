import { actionTypes } from '../types';

const initialState = {
  show: false,
  msg: '',
};

export default function errorsReducer(state = initialState, action: any) {
  switch (action.type) {
    case actionTypes.SET_ERROR:
      return action.payload;
    case actionTypes.REMOVE_ERROR:
      return action.payload;
    default:
      return state;
  }
}
