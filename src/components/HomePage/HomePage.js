import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import {logo} from '../../assets/logo.png';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './HomePage.css';

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
                <div className="container">
                    <Header />
                    <div className="body-container">
                        <h1> Engagement Survey</h1>
                        <img src={logo} alt="logo" />
                        <p>Assesments</p>
                    </div>
                    <Link to={`/questions/${this.state.currentQuestionIndex}`} >
                    <button> Start Assessment</button></Link>
                    <Footer />
                </div>
                
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