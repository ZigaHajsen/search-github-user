import { actionTypes } from '../types';

export const setLoading = () => (dispatch: any) => {
  dispatch({
    type: actionTypes.SET_LOADING,
    payload: { isLoading: true },
  });
};

export const removeLoading = () => (dispatch: any) => {
  dispatch({
    type: actionTypes.REMOVE_LOADING,
    payload: { isLoading: false },
  });
};
