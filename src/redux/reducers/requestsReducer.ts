import { actionTypes } from '../types';

export default function requestsReducer(state = {}, action: any) {
  switch (action.type) {
    case actionTypes.CHECK_REQUESTS:
      return action.payload;
    default:
      return state;
  }
}
