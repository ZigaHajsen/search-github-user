import { actionTypes } from '../types';

export type LoadingActions = {
  type: string;
  payload: object;
};

export const setLoading = () => (
  dispatch: (action: LoadingActions) => null
) => {
  dispatch({
    type: actionTypes.SET_LOADING,
    payload: { isLoading: true },
  });
};

export const removeLoading = () => (
  dispatch: (action: LoadingActions) => null
) => {
  dispatch({
    type: actionTypes.REMOVE_LOADING,
    payload: { isLoading: false },
  });
};
