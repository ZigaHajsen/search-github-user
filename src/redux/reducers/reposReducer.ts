import { actionTypes } from '../types';

export default function reposReducer(state = [], action: any) {
  switch (action.type) {
    case actionTypes.GET_REPOS:
      return action.payload;
    default:
      return state;
  }
}
