import request from 'superagent';
import {baseUrl} from '../../constants';
import { put } from 'redux-saga/effects';
import * as actions from '../actions';

export function* getQuestions(action){
   try{
       const response = yield request.get(`${baseUrl}/questions`);
       yield put(actions.questionList(response.body));
   }
   catch(error) {
       console.error(error)
   }
}