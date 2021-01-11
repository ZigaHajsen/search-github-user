import axios from 'axios';
import { actionTypes } from '../types';
import { GithubReposModel } from '../../models/interface-models';

export type ReposActions = {
  type: string;
  payload?: GithubReposModel;
};

export const getRepos = (user: string) => async (
  dispatch: (action: ReposActions) => null
) => {
  try {
    const res = await axios.get(`https://api.github.com/users/${user}/repos`);

    dispatch({
      type: actionTypes.GET_REPOS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_REPOS_ERROR,
    });
  }
};
