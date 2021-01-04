import axios from 'axios';
import { actionTypes } from '../types';
import { setError, removeError } from './errorsActions';
import { setLoading, removeLoading } from './loadingActions';
import { checkRequests } from './requestsActions';
import { getFollowers } from './followersActions';
import { getRepos } from './reposActions';

export const searchUser = (user: string) => async (dispatch: any) => {
  dispatch(setLoading());

  try {
    const res = await axios.get(`https://api.github.com/users/${user}`);

    dispatch(checkRequests());
    dispatch({
      type: actionTypes.SEARCH_USER,
      payload: res.data,
    });
    dispatch(getFollowers(user));
    dispatch(getRepos(user));
    dispatch(removeError());
    dispatch(removeLoading());
  } catch (error) {
    dispatch(checkRequests());
    dispatch({
      type: actionTypes.SEARCH_USER_ERROR,
    });
    dispatch(setError(true, 'there is no user with that username'));
    dispatch(removeLoading());
  }
};
