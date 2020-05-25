import axios from 'axios';
import { FETCH_USERS } from './actionTypes';
import { rickMortyDataSuccess, rickMortyDataFail } from './rickMortyActions';
import { dataLoadingAction, dataLoadedAction } from './dataLoadingActions';

export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get('https://react-ssr-api.herokuapp.com/users');

  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};

export const fetchRickMortyData = () => async (dispatch) => {
  try {
    // Dispatch data loading action
    dispatch(dataLoadingAction());
    const res = await axios.get('https://rickandmortyapi.com/api/character');
    dispatch(rickMortyDataSuccess(res));
    // Dispatch data loaded action
    dispatch(dataLoadedAction());
  } catch (err) {
    dispatch(rickMortyDataFail(err));
    // Dispatch data loaded action
    dispatch(dataLoadedAction());
  }
};
