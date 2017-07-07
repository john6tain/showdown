import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ShowdownContainer from '../containers/ShowdownContainer';
import AddCombatantContainer from '../containers/AddCombatantContainer';

export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ ShowdownContainer } />
                <Route path="/combatant/add" component={ AddCombatantContainer } />
            </Switch>
        )
    }
}