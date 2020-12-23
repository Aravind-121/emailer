import { combineReducers } from 'redux';
import authReducer from './authReducer';
import mailReducer from './mailReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  mails: mailReducer,
  form: formReducer
});