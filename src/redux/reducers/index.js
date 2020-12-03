import { combineReducers } from 'redux';
import authReducer from './authReducer';
import layoutReducer from './layoutReducer';

export default combineReducers({
    layout: layoutReducer,
    auth: authReducer
})