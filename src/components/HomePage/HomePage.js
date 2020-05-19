import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import {logo} from '../../assets/logo.png';
import {Link} from 'react-router-dom';

class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            currentQuestionIndex: 1
        }
    }

    componentDidMount(){
        this.props.fetchQuestionCount();
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <h1> Engagement Survey</h1>
                    <img src={logo} alt="logo" />
                    <p>Assesments</p>
                </div>
               <Link to={`/questions/${this.state.currentQuestionIndex}`} >
                  <button> Start Assessment</button></Link>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        questioncount: state.questioncount
    }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchQuestionCount: () => dispatch(actions.fetchQuestionCount())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage)