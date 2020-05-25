import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import RickMortyReducer from './rickMortyReducer';
import FilterReducer from './filterReducer';
import DataLoadingReducer from './dataLoadingReducer';

export default combineReducers({
    users: usersReducer,
    rickMorty: RickMortyReducer,
    filterTerms: FilterReducer,
    dataLoading: DataLoadingReducer,
})