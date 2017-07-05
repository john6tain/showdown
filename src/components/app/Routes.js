import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ShowdownContainer from '../containers/ShowdownContainer';

export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={ ShowdownContainer } />
            </Switch>
        )
    }
}