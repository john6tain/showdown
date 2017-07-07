import React from 'react';
import CombatantActions from '../../actions/CombatantActions';
import CombatantFormStore from '../../stores/CombatantFormStore';
import AddCombatant from '../combatant/AddCombatant';

export default class AddCombatantContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = CombatantFormStore.getState();

        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    componentDidMount() {
        CombatantFormStore.listen(this.onChange);
    }

    componentWillUnmount() {
        CombatantFormStore.unlisten(this.onChange);
    }

    handleSubmit(e) {
        e.preventDefault();

        CombatantActions.addCombatant(this.state);
    }

    render() {
        return <AddCombatant handleSubmit={ this.handleSubmit.bind(this) }
                             name={ this.state.name }
                             description={ this.state.description }
                             imageUrl={ this.state.imageUrl }
                             formMessage={ this.state.formMessage } />;
    }
}