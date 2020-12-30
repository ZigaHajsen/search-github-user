import { actionTypes } from '../types';
import user from '../../mockData/mockUser';

const initialState = user;

export default function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case actionTypes.SEARCH_USER:
      return action.payload;
    default:
      return state;
  }
}
