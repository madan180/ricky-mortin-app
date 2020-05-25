import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';


export default () => {
    const middlwares = [thunk];
    return createStore(reducers, {}, applyMiddleware(thunk));
}