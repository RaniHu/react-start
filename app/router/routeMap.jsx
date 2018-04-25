import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../pages';
import Home from '../pages/Home';
import List from '../pages/List';
import NotFound from '../pages';





class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="/list/:name/:age" component={List}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap
