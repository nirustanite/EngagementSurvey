import * as actionTypes from '../actions/actionTypes';


let initialstate = {
    currentQuestionIndex: 1,
    currentQuestion: {},
    nextQuestion: {},
    previousQuestion:{}
}

const reducer = (state=initialstate, action={}) =>{
    switch(action.type){
        default:
            return state
    }
}

export default reducer;