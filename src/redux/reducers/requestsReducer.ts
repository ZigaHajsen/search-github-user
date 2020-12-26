import { Action } from 'redux';

const initialState = 0;

export default function requestsReducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
