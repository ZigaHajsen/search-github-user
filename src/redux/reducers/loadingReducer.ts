import { actionTypes } from '../types';
import { LoadingActions } from '../actions/loadingActions';

const initialState = {
  isLoading: false,
};

export default function loadingReducer(
  state = initialState,
  action: LoadingActions
) {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return action.payload;
    case actionTypes.REMOVE_LOADING:
      return action.payload;
    default:
      return state;
  }
}
