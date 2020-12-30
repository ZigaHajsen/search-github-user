import axios from 'axios';
import { actionTypes } from '../types';

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
  }
};
