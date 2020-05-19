import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Question from './Question';
import { timingSafeEqual } from 'crypto';

class QuestionContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            currentQuestionIndex: 1,
        }
    }

    componentDidMount(){
       this.props.fetchQuestions();
    }

    render(){
        return(
            <React.Fragment>
               <Question questionList={this.props.questions} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        questions: state.questionsList
    }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchQuestions: () => dispatch(actions.fetchQuestions())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(QuestionContainer)