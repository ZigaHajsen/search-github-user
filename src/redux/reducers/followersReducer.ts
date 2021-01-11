import { actionTypes } from '../types';
import { GetFollowersAction } from '../actions/followersActions';

export default function followersReducer(
  state = [],
  action: GetFollowersAction
) {
  switch (action.type) {
    case actionTypes.GET_FOLLOWERS:
      return action.payload;
    default:
      return state;
  }
}
