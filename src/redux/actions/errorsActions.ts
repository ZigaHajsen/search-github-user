import { actionTypes } from '../types';
interface SetErrorAction {
  type: typeof actionTypes.SET_ERROR;
  payload: object;
}

interface RemoveErrorAction {
  type: typeof actionTypes.REMOVE_ERROR;
  payload: object;
}

export type ErrorsActions = SetErrorAction | RemoveErrorAction;

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
