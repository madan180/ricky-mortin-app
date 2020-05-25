import { DATA_LOADED, DATA_LOADING } from './actionTypes';

export const dataLoadingAction = () => ({
  type: DATA_LOADING,
});

export const dataLoadedAction = () => ({
  type: DATA_LOADED,
});
