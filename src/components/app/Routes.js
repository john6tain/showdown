import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ShowdownContainer from '../containers/ShowdownContainer';

import Parent from '../containers/Parent';

export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ ShowdownContainer } />
                <Route path="/test" component={ Parent } />
            </Switch>
        )
    }
}