import { actionTypes } from '../types';

interface SetLoadingAction {
  type: typeof actionTypes.SET_LOADING;
  payload: object;
}

interface RemoveLoadingAction {
  type: typeof actionTypes.REMOVE_LOADING;
  payload: object;
}

export type LoadingActions = SetLoadingAction | RemoveLoadingAction;

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
