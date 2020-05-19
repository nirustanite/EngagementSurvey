import { combineReducers } from 'redux';
import questionsList from './questionsList';
import questiontracker from './questiontracker';

export default combineReducers({
    questiontracker,
    questionsList,
})