import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authReducer from './auth-reducer'

const rootReducer = combineReducers({
  form: formReducer, // form: form
  auth: authReducer
});

export default rootReducer;
