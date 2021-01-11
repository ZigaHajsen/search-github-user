import { actionTypes } from '../types';
import { ReposActions } from '../actions/reposActions';

export default function reposReducer(state = [], action: ReposActions) {
  switch (action.type) {
    case actionTypes.GET_REPOS:
      return action.payload;
    default:
      return state;
  }
}
