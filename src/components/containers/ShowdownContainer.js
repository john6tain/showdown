import React from 'react';
import CombatantActions from '../../actions/CombatantActions';
import ShowdownStore from '../../stores/ShowdownStore'
import Showdown from '../Showdown';

export default class ShowdownContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = ShowdownStore.getState();

        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    componentDidMount() {
        ShowdownStore.listen(this.onChange);
        CombatantActions.getShowdown();
    }

    componentWillUnmount() {
        ShowdownStore.unlisten(this.onChange);
    }

    upVote(combatantId) {
        console.log('upvoting', combatantId);
        CombatantActions.upVote(combatantId);
    }

    render() {
        return <Showdown combatants={ this.state.combatants }
                         upVote={ this.upVote }
                         context={ this }
                         message={ this.state.message } />;
    }
}
