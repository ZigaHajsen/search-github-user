import { actionTypes } from '../types';

export default function userReducer(state = [], action: any) {
  switch (action.type) {
    case actionTypes.SEARCH_USER:
      return action.payload;
    default:
      return state;
  }
}
