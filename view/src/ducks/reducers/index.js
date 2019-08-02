import authReducer from './authReducer';
import moodReducer from './moodReducer';
import { combineReducers } from 'redux';

/* auth and mood properties correspond to these reducers */
const rootReducer = combineReducers({
  auth: authReducer,
  mood: moodReducer
});

// Reducers are where state is manipulated
export default rootReducer;
