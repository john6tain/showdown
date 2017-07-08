import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShowdownContainer from '../containers/ShowdownContainer';
import AddCombatantContainer from '../containers/AddCombatantContainer';
import Login from '../user/Login';
import Register from '../user/Register';
import Profile from '../user/Profile';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={ShowdownContainer} />
        <Route  path='/login' component={Login} />
        <Route  path='/register' component={Register} />
        <PrivateRoute  path='/profile' component={Profile} locataion="/profile" />
        <Route path="/combatant/add" component={ AddCombatantContainer } />
    </Switch>
);

export default Routes;

