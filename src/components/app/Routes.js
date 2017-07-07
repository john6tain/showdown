import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShowdownContainer from '../containers/ShowdownContainer';
import AddCombatantContainer from '../containers/AddCombatantContainer';
import Login from '../user/Login';
import Register from '../user/Register';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={ ShowdownContainer } />
        <Route exact path='/login' component={ Login } />
        <Route exact path='/register' component={ Register } />
        <Route path="/combatant/add" component={ AddCombatantContainer } />
    </Switch>
);

export default Routes;

