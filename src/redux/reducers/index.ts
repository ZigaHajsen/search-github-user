import { combineReducers } from 'redux';
import userReducer from './userReducer';
import reposReducer from './reposReducer';
import followersReducer from './followersReducer';
import requestsReducer from './requestsReducer';
import errorsReducer from './errorsReducer';

export default combineReducers({
  githubUser: userReducer,
  githubRepos: reposReducer,
  githubFollowers: followersReducer,
  githubRequests: requestsReducer,
  errors: errorsReducer,
});
