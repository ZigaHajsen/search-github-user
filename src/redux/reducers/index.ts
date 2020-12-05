import { combineReducers } from 'redux';
import userReducer from './userReducer';
import reposReducer from './reposReducer';
import followersReducer from './followersReducer';

export default combineReducers({
  user: userReducer,
  repos: reposReducer,
  followers: followersReducer,
});
