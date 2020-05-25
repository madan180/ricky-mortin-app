import { FETCH_RICKY_MORTY_DATA_SUCCESS, FETCH_RICKY_MORTY_DATA_FAIL } from './actionTypes';

export const rickMortyDataSuccess = resp => ({
    type: FETCH_RICKY_MORTY_DATA_SUCCESS,
    payload: resp,
});

export const rickMortyDataFail = err => ({
    type: FETCH_RICKY_MORTY_DATA_FAIL,
    error: err,
});