import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth/authReducer';
import loadingReducer from './loading/loadingReducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  loading: loadingReducer
});

export default rootReducer;