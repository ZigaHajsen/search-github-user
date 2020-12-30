import axios from 'axios';
import { actionTypes } from '../types';
import { setError } from './errorsActions';

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
