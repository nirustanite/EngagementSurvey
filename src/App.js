import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { HomePage, QuestionContainer } from './components'
 
export default class App extends Component{
    render(){
        return(
            <React.Fragment>
               <Route exact path="/" component={HomePage} />
               <Route exact path="/questions/:id" component={QuestionContainer} />
            </React.Fragment>
        )
    }
}