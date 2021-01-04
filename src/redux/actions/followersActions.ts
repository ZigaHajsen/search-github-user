import axios from 'axios';
import { actionTypes } from '../types';

export const getFollowers = (user: string) => async (dispatch: any) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users/${user}/followers`
    );

    dispatch({
      type: actionTypes.GET_FOLLOWERS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_FOLLOWERS_ERROR,
    });
  }
};
