import { DATA_LOADED, DATA_LOADING } from '../actions/actionTypes';

export default (state='NOT_STARTED', action) => {
    switch(action.type) {
        case DATA_LOADING:
            return 'IN_PROGRESS';
        case DATA_LOADED:
            return 'DONE';
        default:
            return state;
    }
};