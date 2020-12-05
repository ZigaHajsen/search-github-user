import { Action } from 'redux';
import followers from '../../mockData/mockFollowers';

const initialState = followers;

export default function followersReducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
