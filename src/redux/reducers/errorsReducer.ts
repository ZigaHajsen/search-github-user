import { actionTypes } from '../types';
import { ErrorsActions } from '../actions/errorsActions';

const initialState = {
  show: false,
  msg: '',
};

export default function errorsReducer(
  state = initialState,
  action: ErrorsActions
) {
  switch (action.type) {
    case actionTypes.SET_ERROR:
      return action.payload;
    case actionTypes.REMOVE_ERROR:
      return action.payload;
    default:
      return state;
  }
}
