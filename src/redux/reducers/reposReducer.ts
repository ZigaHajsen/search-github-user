import { Action } from 'redux';
import repos from '../../mockData/mockRepos';

const initialState = repos;

export default function reposReducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
