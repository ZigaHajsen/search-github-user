import axios from 'axios';
import { actionTypes } from '../types';
import { GithubFollowerModel } from '../../models/interface-models';

export type GetFollowersAction = {
  type: string;
  payload?: GithubFollowerModel;
};

export const getFollowers = (user: string) => async (
  dispatch: (action: GetFollowersAction) => null
) => {
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
