import { actionTypes } from '../types';
import repos from '../../mockData/mockRepos';

const initialState = repos;

export default function reposReducer(state = initialState, action: any) {
  switch (action.type) {
    case actionTypes.GET_REPOS:
      return action.payload;
    default:
      return state;
  }
}
