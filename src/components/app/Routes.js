import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShowdownContainer from '../containers/ShowdownContainer';

export default Routes = () => (
    <Switch>
        <Route exact path='/' component={ ShowdownContainer } />
    </Switch>
);

