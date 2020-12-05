import { Action } from 'redux';
import user from '../../mockData/mockUser';

const initialState = user;

export default function userReducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
