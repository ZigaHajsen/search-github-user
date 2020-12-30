import { actionTypes } from '../types';

export const setError = (show: boolean, msg: string) => (dispatch: any) => {
  dispatch({
    type: actionTypes.SET_ERROR,
    payload: { show, msg },
  });
};

export const removeError = (show: boolean, msg: string) => (
  dispatch: any
) => {};
