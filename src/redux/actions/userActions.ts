import axios from 'axios';

export const actionTypes = {
  SEARCH_USER: 'SEARCH_USER',
  SEARCH_USER_ERROR: 'SEARCH_USER_ERROR',
};

export const searchUser = (user: string) => async (dispatch: any) => {
  try {
    const res = await axios.get(`https://api.github.com/users/${user}`);

    dispatch({
      type: actionTypes.SEARCH_USER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.SEARCH_USER_ERROR,
    });
  }
};
