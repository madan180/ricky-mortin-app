import { FETCH_RICKY_MORTY_DATA_SUCCESS, FETCH_RICKY_MORTY_DATA_FAIL } from '../actions/actionTypes';

export default (state = { showData: null, showDataError: null }, action) => {
    switch(action.type) {
        case FETCH_RICKY_MORTY_DATA_SUCCESS:
            return {...state, showData: action.payload.data, showDataError: null};
        case FETCH_RICKY_MORTY_DATA_FAIL:
            return {...state, showData: null, showDataError: payload.error};
        default:
            return state;
    }
}