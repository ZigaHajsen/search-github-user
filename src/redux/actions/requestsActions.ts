import axios from 'axios';

export const actionTypes = {
  CHECK_REQUESTS: 'CHECK_REQUESTS',
  CHECK_REQUEST_ERROR: 'CHECK_REQUEST_ERROR',
};

export const checkRequests = () => async (dispatch: any) => {
  try {
    const res = await axios.get('https://api.github.com/rate_limit');

    dispatch({
      type: actionTypes.CHECK_REQUESTS,
      payload: res.data.rate,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.CHECK_REQUEST_ERROR,
    });
  }
};
