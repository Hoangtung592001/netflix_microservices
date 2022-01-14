import { combineReducers } from 'redux';
import userReducer from './userReducer';
import alertReducer from './alertReducer';
import contentReducer from './contentReducer';
import authReducer from './authReducer';
import searchReducer from './searchReducer';
export default combineReducers({
    user: userReducer,
    alert: alertReducer,
    content: contentReducer,
    auth: authReducer,
    search: searchReducer
})