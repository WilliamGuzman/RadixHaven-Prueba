import { combineReducers } from 'redux';
import authReducer from './authReducer';
import layoutReducer from './layoutReducer';
import userReducer from './userReducer';

export default combineReducers({
    layout: layoutReducer,
    auth: authReducer,
    user: userReducer
})