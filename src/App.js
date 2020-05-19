import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, QuestionContainer, Component404, Header, Footer } from './components'
 
export default class App extends Component{
    render(){
        return(
            <React.Fragment>
                <div class="container">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/questions/:id" component={QuestionContainer} />
                        <Route component={Component404} />
                    </Switch>
                    <Footer />
                </div>
                
            </React.Fragment>
        )
    }
}