import axios from 'axios';
import { actionTypes } from '../types';
import { setError, removeError } from './errorsActions';
import { setLoading, removeLoading } from './loadingActions';
import { checkRequests } from './requestsActions';
import { getFollowers } from './followersActions';
import { getRepos } from './reposActions';

export const searchUser = (user: string) => async (dispatch: any) => {
  try {
    const res = await axios.get(`https://api.github.com/users/${user}`);

    dispatch({
      type: actionTypes.SEARCH_USER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.SEARCH_USER_ERROR,
    });
    dispatch(setError(true, 'there is no user with that username'));
  }
};

export const searchUserData = (user: string) => async (dispatch: any) => {
  dispatch(setLoading());

  try {
    await Promise.allSettled([
      dispatch({
        type: actionTypes.SEARCH_USER_DATA,
      }),
      dispatch(checkRequests()),
      dispatch(searchUser(user)),
      dispatch(getFollowers(user)),
      dispatch(getRepos(user)),
      dispatch(removeError()),
    ]);

    dispatch(removeLoading());
  } catch (error) {
    console.log(error);
  }
};
