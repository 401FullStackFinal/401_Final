import score from './score-reducer';
import { combineReducers } from 'redux';

const mainReducer = combineReducers({
  score,
});

export default mainReducer;
