import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShowdownContainer from '../containers/ShowdownContainer';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={ ShowdownContainer } />
    </Switch>
);

export default Routes