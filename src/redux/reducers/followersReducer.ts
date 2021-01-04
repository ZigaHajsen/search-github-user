import { actionTypes } from '../types';
import followers from '../../mockData/mockFollowers';

const initialState = followers;

export default function followersReducer(state = initialState, action: any) {
  switch (action.type) {
    case actionTypes.GET_FOLLOWERS:
      return action.payload;
    default:
      return state;
  }
}
