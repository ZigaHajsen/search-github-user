import { actionTypes } from '../types';

export type ErrorsActions = {
  type: string;
  payload: object;
};

export const setError = (show: boolean, msg: string) => (
  dispatch: (action: ErrorsActions) => null
) => {
  dispatch({
    type: actionTypes.SET_ERROR,
    payload: { show, msg },
  });
};

export const removeError = () => (
  dispatch: (action: ErrorsActions) => null
) => {
  dispatch({
    type: actionTypes.REMOVE_ERROR,
    payload: { show: false, msg: '' },
  });
};
