import * as actionTypes from './actionTypes';

export const fetchQuestions = () => ({
    type: actionTypes.FETCH_QUESTIONS
})

export const questionList = (data) => ({
    type: actionTypes.QUESTIONS_LIST,
    data
})