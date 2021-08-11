import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import alertReducer from './alert/reducer'
const rootReducer = combineReducers({
	user:userReducer,
	alert:alertReducer
});

export default rootReducer;
