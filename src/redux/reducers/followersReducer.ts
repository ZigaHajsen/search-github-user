import { actionTypes } from '../types';

export default function followersReducer(state = [], action: any) {
  switch (action.type) {
    case actionTypes.GET_FOLLOWERS:
      return action.payload;
    default:
      return state;
  }
}
