import * as actionTypes from '../actions/actionTypes';

const reducer = (state=[], action={}) =>{
    switch(action.type){
        case actionTypes.QUESTIONS_LIST:
            return action.data
        default:
            return state
    }
}

export default reducer;