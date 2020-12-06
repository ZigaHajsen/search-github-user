import { combineReducers } from 'redux';
import userReducer from './userReducer';
import reposReducer from './reposReducer';
import followersReducer from './followersReducer';

export default combineReducers({
  githubUser: userReducer,
  githubRepos: reposReducer,
  githubFollowers: followersReducer,
});
