import axios from 'axios';
import { actionTypes } from '../types';

export const getRepos = (user: string) => async (dispatch: any) => {
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
