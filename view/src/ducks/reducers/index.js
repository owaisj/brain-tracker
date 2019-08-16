import authReducer from './authReducer';
import moodReducer from './moodReducer';
import sleepReducer from './sleepReducer';
import visibilityFilter from './visibilityFilter';
import blogReducer from './blogReducer';
import { combineReducers } from 'redux';

/* auth and mood properties correspond to these reducers */
const rootReducer = combineReducers({
  auth: authReducer,
  mood: moodReducer,
  sleep: sleepReducer,
  blog: blogReducer,
  visFilter: visibilityFilter
});

// Reducers are where state is manipulated
export default rootReducer;
