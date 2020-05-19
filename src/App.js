import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { QuestionContainer } from './components'
 
export default class App extends Component{
    render(){
        return(
            <React.Fragment>
               <Route exact path="/" component={QuestionContainer} />
            </React.Fragment>
        )
    }
}