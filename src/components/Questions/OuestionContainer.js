import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchQuestion} from '../../store/actions';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class QuestionContainer extends Component{
 
    
     constructor(props){
       super(props)
       this.state={
        id: Number(this.props.match.params.id)
      }
     }
    
    displayQuestion(questionId){
      this.props.fetchQuestion(questionId);
    }

    handleNextClick = () => {
      const newId = this.state.id + 1;
      if(newId <= this.props.count){
      this.displayQuestion(newId);
      this.setState({
        id: newId
      })}

    }

    handlePrevClick = () => {
      const newId = this.state.id - 1;
      if(newId < this.props.count){
      this.displayQuestion(newId);
      this.setState({
        id: newId
      })}
    }

    handleCLickbutton = () => {
      this.props.history.push('/');
    }

    componentDidMount(){
      console.log("inside Question Container")
      console.log(this.props.match.params.id)
      if(Number(this.props.match.params.id) <= this.props.count){
         this.displayQuestion(Number(this.props.match.params.id))
      }
       
    }

    render(){
       console.log(this.state)
        return(
            <React.Fragment>
            
               {this.props.question && 
                <div className="question-container">  
                  <p>{this.props.question.description}</p>
                  <div>
                    {this.state.id !== 1 && 
                       <Link to={`/questions/${this.state.id - 1}`}>
                       <button onClick={this.handlePrevClick}>Prev</button></Link>
                    }

                    {this.state.id === this.props.count && <button onClick={this.handleCLickbutton}>Submit</button>}

                    {this.state.id < this.props.count && <Link to={`/questions/${this.state.id + 1}`}>
                      <button onClick={this.handleNextClick}>Next</button>
                    </Link>}
                  </div>
                </div>}
            
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
   console.log(state)
    return{
        count: state.questionCount,
        question: state.question
    }
}

export default connect(mapStateToProps,{fetchQuestion})(QuestionContainer)