import React from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage';

function App() {

    return ( 
    <Switch>
        <Route path="/todo" exact component={HomePage} />
        <Redirect to="/todo" />
    </Switch>    
    )
}

export default App;