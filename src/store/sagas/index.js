import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { getQuestions } from './questionsaga';

export function* watchQuestions(){
    yield takeEvery(actionTypes.FETCH_QUESTIONS, getQuestions);
}