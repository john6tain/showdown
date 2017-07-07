import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TopTenContainer from'../containers/TopTenContainer'
import ShowdownContainer from '../containers/ShowdownContainer';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={ ShowdownContainer } />
        <Route path='/topten' component={ TopTenContainer } />
    </Switch>
);

export default Routes