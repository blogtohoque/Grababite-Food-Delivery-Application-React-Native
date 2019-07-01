import {createStore,combineReducers} from 'redux';

import mainReducer from './reducers/mainReducer';

const rootReducer= combineReducers({
    Main:mainReducer

});

const configureStore =()=>{
    return createStore(rootReducer);
};


export default configureStore;