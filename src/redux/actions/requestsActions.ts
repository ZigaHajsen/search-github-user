import axios from 'axios';
import { actionTypes } from '../types';
import { setError } from './errorsActions';

export const checkRequests = () => async (dispatch: any) => {
  try {
    const res = await axios.get('https://api.github.com/rate_limit');

    dispatch({
      type: actionTypes.CHECK_REQUESTS,
      payload: res.data.rate,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.CHECK_REQUESTS_ERROR,
    });
    dispatch(
      setError(true, 'sorry, you have exceeded your hourly rate limit!')
    );
  }
};
